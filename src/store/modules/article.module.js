import { ArticlesService } from '../../services/articles.service'
import { CommentsService } from '../../services/comments.service'
import {
  GET_ARTICLE,
  GET_PROFILE_ARTICLES,
  GET_COMMENTS,
  ARTICLE_UPDATE,
  ARTICLE_CREATE,
  ARTICLE_DELETE,
  COMMENT_CREATE,
  COMMENT_DELETE,
  FAVORITE_ADD,
  FAVORITE_REMOVE
} from '../types/actions.type';
import {
  ARTICLE_SET,
  LOAD_START,
  LOAD_END,
  FAVORITED_ARTICLES_SET,
  MY_ARTICLES_SET,
  COMMENTS_SET
} from "../types/mutations.type";

const dummyArticle = {
  "slug": "how-to-train-your-dragon",
  "title": "How to train your dragon",
  "description": "Ever wonder how?",
  "body": "It takes a Jacobian",
  "tagList": ["dragons", "training"],
  "createdAt": "2016-02-18T03:22:56.637Z",
  "updatedAt": "2016-02-18T03:48:35.824Z",
  "favorited": false,
  "favoritesCount": 0,
  "author": {
    "username": "jake",
    "bio": "I work at statefarm",
    "image": "https://i.stack.imgur.com/xHWG8.jpg",
    "following": false
  }
}

export default {
  namepaced: true,
  state: {
    selected: null,
    myArticles: [],
    myArticlesCount: 0,
    favoritedArticles: [],
    favoritedCount: 0,
    comments: []
  },
  mutations: {
    [ARTICLE_SET](state, { article }) {
      state.selected = article;
    },
    [MY_ARTICLES_SET](state, data) {
      state.myArticles = data.articles;
      state.myArticlesCount = data.articlesCount
    },
    [FAVORITED_ARTICLES_SET](state, data) {
      state.favoritedArticles = data.articles;
      state.favoritedCount = data.articlesCount
    },
    [COMMENTS_SET](state, { comments }) {
      state.comments = comments;
    }
  },
  actions: {
    [GET_ARTICLE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        ArticlesService.get(params)
        .then(({ data }) => {
          commit(ARTICLE_SET, data);
          resolve(data.article);
        })
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => {
          commit(LOAD_END);
        });
      }); 
    },
    [GET_PROFILE_ARTICLES]({ commit }, params) {
      const queryParams = {
        limit: 5,
        offset: (params.page - 1) * 10
      }
      if (params.type === 1) {
        queryParams.favorited = params.user
      }
      else if (params.type === 0) {
        queryParams.author = params.user
      }
      commit(LOAD_START);
      return ArticlesService.getAll(queryParams)
        .then(({ data }) => {
          if (queryParams.favorited = params.user) {
            commit(MY_ARTICLES_SET, data);
          } else {
            commit(FAVORITED_ARTICLES_SET, data);
          }
        })
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => {
          commit(LOAD_END);
        });
    },
    [GET_COMMENTS]({ commit }, params) {
      commit(LOAD_START);
      return CommentsService.get(params)
        .then(({ data }) => {
          commit(COMMENTS_SET, data);
        })
        .catch(error => {
          throw new Error(error);
        })
        .finally(() => {
          commit(LOAD_END);
        });
    },
    [ARTICLE_UPDATE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        ArticlesService.update(params.routeParam, params.payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [ARTICLE_CREATE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        ArticlesService.post(params.payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [ARTICLE_DELETE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        ArticlesService.delete(params)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [COMMENT_CREATE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        CommentsService.post(params.slug,params.payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [COMMENT_DELETE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise(resolve => {
        CommentsService.delete(params.slug, params.commentId)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [FAVORITE_ADD]({ commit }, params) {
      commit(LOAD_START);
      return new Promise((resolve, reject) => {
        ArticlesService.setFavorite(params, null)
          .then(({data}) => {
            commit(ARTICLE_SET, data);
            resolve(data.article);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    },
    [FAVORITE_REMOVE]({ commit }, params) {
      commit(LOAD_START);
      return new Promise((resolve, reject) => {
        ArticlesService.removeFavorite(params)
          .then(({data}) => {
            commit(ARTICLE_SET, data);
            resolve(data.article);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            commit(LOAD_END);
          });
      });
    }
  }
}

