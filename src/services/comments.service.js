import { ApiService } from './api.service'
import JwtService from './jwt.service'

export const CommentsService = {
  get (articleSlug) {
    const param = articleSlug + '/comments'
    return ApiService.get('articles', param)
  },
  post (articleSlug, param) {
    const query = articleSlug + '/comments'
    ApiService.setToken(JwtService.getToken())
    return ApiService.post('articles/' + query, { comment: param })
  },
  delete (articleSlug, commentId) {
    const route = articleSlug + '/comments'
    ApiService.setToken(JwtService.getToken())
    return ApiService.delete('articles/' + route, commentId)
  }
}
