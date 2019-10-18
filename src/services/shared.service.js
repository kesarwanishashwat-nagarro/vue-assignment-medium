import { ApiService } from './api.service'
import JwtService from './jwt.service'

export const SharedService = {
  getProfile (user) {
    ApiService.setToken(JwtService.getToken())
    return ApiService.get('profiles', user)
  },
  getTags () {
    return ApiService.getAll('tags')
  }
}
