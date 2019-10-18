import {ApiService} from './api.service'
import JwtService from './jwt.service'

export const ArticlesService = {
    query(type, params) {
      ApiService.setToken(JwtService.getToken());
      return ApiService.getAll("articles" + (type === "feed" ? "/feed" : ""), params);
    },
    get(slug) {
      ApiService.setToken(JwtService.getToken());
      return ApiService.get("articles", slug);
    },
    getAll(params){
      ApiService.setToken(JwtService.getToken());
        return ApiService.getAll('articles', params);
    },
    create(params) {
      ApiService.setToken(JwtService.getToken());
      return ApiService.post("articles", { article: params });
    },
    update(slug, params) {
      ApiService.setToken(JwtService.getToken());
      return ApiService.update("articles", slug, { article: params });
    },
    delete(slug) {
      ApiService.setToken(JwtService.getToken());
      return ApiService.delete('articles', slug);
    },
    post(payload){
      ApiService.setToken(JwtService.getToken());
      return ApiService.post('articles', {article: payload});
    },
    setFavorite(slug, payload){
      ApiService.setToken(JwtService.getToken());
      return ApiService.post('articles/' + slug + '/favorite', payload);
    },
    removeFavorite(slug){
      ApiService.setToken(JwtService.getToken());
      return ApiService.delete('articles/' + slug + '/favorite', null);
    }
};