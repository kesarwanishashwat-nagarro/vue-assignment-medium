import { api } from './api'

export const ApiService = {
  async get (resource, slug) {
    return api.get(`${resource}/${slug}`)
  },

  async delete (resource, slug) {
    const route = slug ? `${resource}/${slug}` : resource
    return api.delete(route)
  },

  async getAll (route, queryParams = {}) {
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

  async post (route, payload) {
    return api.post(route, payload)
  },

  async put (route, payload) {
    return api.put(route, payload)
  },

  async setToken (JWT) {
    api.defaults.headers.common.Authorization = `Token ${JWT}`
  },

  async clearToken (JWT) {
    delete api.defaults.headers.common.Authorization
  },

  async update (route, routeParams, payload) {
    return api.put(route + '/' + routeParams, payload)
  }

}

// export default ApiService

// const ApiService = {
//     init() {
//       Vue.use(VueAxios, axios);
//       Vue.axios.defaults.baseURL = API_URL;
//     },

//     setHeader() {
//       Vue.axios.defaults.headers.common[
//         "Authorization"
//       ] = `Token ${JwtService.getToken()}`;
//     },

//     query(resource, params) {
//       return Vue.axios.get(resource, params).catch(error => {
//         throw new Error(`[RWV] ApiService ${error}`);
//       });
//     },

//     get(resource, slug = "") {
//       return Vue.axios.get(`${resource}/${slug}`).catch(error => {
//         throw new Error(`[RWV] ApiService ${error}`);
//       });
//     },

//     post(resource, params) {
//       return Vue.axios.post(`${resource}`, params);
//     },

//     update(resource, slug, params) {
//       return Vue.axios.put(`${resource}/${slug}`, params);
//     },

//     put(resource, params) {
//       return Vue.axios.put(`${resource}`, params);
//     },

//     delete(resource) {
//       return Vue.axios.delete(resource).catch(error => {
//         throw new Error(`[RWV] ApiService ${error}`);
//       });
//     }
//   };

export default ApiService
