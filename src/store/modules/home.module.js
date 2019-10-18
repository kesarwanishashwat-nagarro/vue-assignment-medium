import { ArticlesService} from '../../services/articles.service'
import { SharedService} from '../../services/shared.service'
import { GET_ARTICLES, GET_TAGS, UPDATE_PAGE_DATA } from '../types/actions.type';
import {
    ARTICLE_SET_GLOBAL,
    ARTICLE_SET_USER,
    LOAD_START,
    LOAD_END,
    SET_TAGS,
    SET_FEED,
    SET_PAGE
} from "../types/mutations.type";

export default {
    namepaced: true,
    state: {
        tags: ["tag1", "tag2"],
        globalArticles: [],
        userFeed: [],
        globalArticlesCount: 0,
        userFeedCount: 0,
        feed: 1,
        page: 1
    },
    mutations: {
        [ARTICLE_SET_GLOBAL](state, {articles, articlesCount}){
            state.globalArticles = articles;
            state.globalArticlesCount = articlesCount;
        },
        [ARTICLE_SET_USER](state, {articles, articlesCount}){
            state.userFeed = articles;
            state.userFeedCount = articlesCount;
        },
        [SET_TAGS](state, tags) {
          state.tags = tags;
        },
        [SET_FEED](state, feed){
          state.feed = feed;
        },
        [SET_PAGE](state, feed){
          state.feed = feed;
        }
    },
    actions: {
        [GET_ARTICLES]({ commit }, params) {
            commit(LOAD_START);
            const queryParams = {
                limit: 10,
                offset: (params.page - 1)  * 10
            }
            if(params.type === 1){
                return ArticlesService.getAll(queryParams)
              .then(({ data }) => {
                commit(ARTICLE_SET_GLOBAL, data);
              })
              .catch(error => {
                throw new Error(error);
              })
              .finally(() => {
                commit(LOAD_END);
              });
            }else{
                return ArticlesService.query('feed', queryParams)
                .then(({ data }) => {
                  commit(ARTICLE_SET_USER, data);
                })
                .catch(error => {
                  throw new Error(error);
                })
                .finally(() => {
                  commit(LOAD_END);
                });
            }

        },
        [GET_TAGS]({ commit }) {
          commit(LOAD_START);
          return SharedService.getTags()
            .then(({ data }) => {
              commit(SET_TAGS, data.tags);
            })
            .catch(error => {
              throw new Error(error);
            })
            .finally(() => {
              commit(LOAD_END);
            });
        },
        [UPDATE_PAGE_DATA]({ commit }, params){
          commit(SET_FEED, params.feed);
          commit(SET_PAGE, params.page);
        }
    }
}