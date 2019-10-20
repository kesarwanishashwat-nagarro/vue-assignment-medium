import { ArticlesService } from '../../services/articles.service'
import { SharedService } from '../../services/shared.service'
import { GET_ARTICLES, GET_TAGS, UPDATE_PAGE_DATA } from '../types/actions.type'
import {
  ARTICLES_SET,
  LOAD_START,
  LOAD_END,
  SET_TAGS,
  SET_FEED,
  SET_PAGE,
  CLEAR_ARTICLES
} from '../types/mutations.type'

export default {
  namepaced: true,
  state: {
    tags: ['tag1', 'tag2'],
    articlesList: [],
    articlesCount: 0,
    feed: 1,
    page: 1
  },
  mutations: {
    [ARTICLES_SET] (state, { articles, articlesCount }) {
      state.articlesList = articles
      state.articlesCount = articlesCount
    },
    [SET_TAGS] (state, tags) {
      state.tags = tags
    },
    [SET_FEED] (state, feed) {
      state.feed = feed
    },
    [SET_PAGE] (state, feed) {
      state.feed = feed
    },
    [CLEAR_ARTICLES] (state) {
      state.articlesList = []
      state.articlesCount = 0
    }
  },
  actions: {
    [GET_ARTICLES] ({ commit, getters }, params) {
      commit(LOAD_START)
      const queryParams = {
        limit: 10,
        offset: (params.page - 1) * 10
      }
      if (params.tag) {
        queryParams.tag = params.tag
      }
      return ArticlesService.query(getters.isAuthenticated && params.type === 0 ? 'feed' : '', queryParams)
        .then(({ data }) => {
          commit(ARTICLES_SET, data)
        })
        .catch(error => {
          throw new Error(error)
        })
        .finally(() => {
          commit(LOAD_END)
        })
    },
    [GET_TAGS] ({ commit }) {
      commit(LOAD_START)
      return SharedService.getTags()
        .then(({ data }) => {
          commit(SET_TAGS, data.tags)
        })
        .catch(error => {
          throw new Error(error)
        })
        .finally(() => {
          commit(LOAD_END)
        })
    },
    [UPDATE_PAGE_DATA] ({ commit }, params) {
      commit(SET_FEED, params.feed)
      commit(SET_PAGE, params.page)
      commit(CLEAR_ARTICLES)
    }
  }
}
