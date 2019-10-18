import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/editor',
      name: 'editor_new',
      component: () => import('./views/NewArticle.vue')
    },
    {
      path: '/editor/:articleDesc',
      name: 'editor_existing',
      component: () => import('./views/NewArticle.vue')
    },
    {
      path: '/article/:articleDesc',
      name: 'article',
      component: () => import('./views/Article.vue')
    },
    {
      path: '/:user',
      name: 'user_profile',
      component: () => import('./views/Profile.vue')
    }
  ]
})
