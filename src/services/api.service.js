import { api } from './api'
import JwtService from './jwt.service'

export const ApiService = {
  async get(resource, slug) {
    return api.get(`${resource}/${slug}`)
  },

  async delete(resource, slug) {
    const route = slug ? `${resource}/${slug}` : resource
    return api.delete(route)
  },

  async getAll(route, queryParams = {}) {
    const queryparamKeys = Object.keys(queryParams)
    if (queryparamKeys.length) {
      route += '?'
      queryparamKeys.forEach((key) => {
        route += `${key}=${queryParams[key]}&`
      })
      route = route.substring(0, route.length - 1)
    }
    return api.get(route)
  },

  async post(route, payload) {
    return api.post(route, payload)
  },

  async put(route, payload) {
    return api.put(route, payload)
  },

  setToken() {
    if (JwtService.getToken()) {
      const JWT = JwtService.getToken()
      api.defaults.headers.common.Authorization = `Token ${JWT}`
    }
  },

  clearToken() {
    delete api.defaults.headers.common.Authorization
  },

  async update(route, routeParams, payload) {
    return api.put(route + '/' + routeParams, payload)
  }

}

export default ApiService
