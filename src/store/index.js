import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.module'
import auth from './modules/auth.module'
import shared from './modules/shared.module'
import article from './modules/article.module'
import {
  LOAD_START,
  LOAD_END
} from './types/mutations.type'

import { SHOW_LOADER, HIDE_LOADER } from './types/actions.type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    [LOAD_START] (state) {
      state.isLoading = true
    },
    [LOAD_END] (state) {
      state.isLoading = false
    }

  },
  actions: {
    [SHOW_LOADER] ({ commit }) {
      commit(LOAD_START)
    },
    [HIDE_LOADER] ({ commit }) {
      commit(LOAD_END)
    }
  },
  modules: {
    home,
    auth,
    shared,
    article
  }
})
