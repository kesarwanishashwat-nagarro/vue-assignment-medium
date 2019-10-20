import { ApiService } from '../../services/api.service'
import JwtService from '../../services/jwt.service'
import {
  LOGIN, LOGOUT, REGISTER
} from '../types/actions.type'
import { SET_AUTH, REMOVE_AUTH } from '../types/mutations.type'

export default {
  state: {
    user: {},
    username: JwtService.getUsername() || '',
    isAuthenticated: JwtService.getToken() || false
  },
  getters: {
    isAuthenticated () {
      return JwtService.getToken() || false
    }
  },
  mutations: {
    [SET_AUTH] (state, user) {
      state.isAuthenticated = true
      state.user = user
      state.username = user.username
      JwtService.saveToken(state.user.token)
      JwtService.saveUsername(state.username)
      ApiService.setToken(JwtService.getToken())
      state.errors = {}
    },
    [REMOVE_AUTH] (state) {
      state.isAuthenticated = false
      state.user = {}
      state.errors = {}
      JwtService.deleteToken()
      JwtService.deleteUsername()
    }
  },
  actions: {
    [LOGIN] ({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        ApiService.post('users/login', { user: credentials })
          .then(({ data }) => {
            commit(SET_AUTH, data.user)
            resolve(data)
          })
          .catch(({ response }) => {
            reject(response.data)
          })
      })
    },

    [LOGOUT] ({ commit }) {
      return new Promise((resolve, reject) => {
        commit(REMOVE_AUTH)
        resolve()
      })
    },
    [REGISTER] ({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        ApiService.post('users', { user: credentials })
          .then(({ data }) => {
            commit(SET_AUTH, data.user)
            resolve(data)
          })
          .catch(({ response }) => {
            reject(response.data)
          })
      })
    }
  }
}
