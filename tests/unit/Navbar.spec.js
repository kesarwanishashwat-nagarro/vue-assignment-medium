import { mount, createLocalVue } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import BootstrapVue from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { LOGOUT } from '../../src/store/types/actions.type'



const localVue = createLocalVue();
localVue.component('font-awesome-icon', FontAwesomeIcon);
localVue.use(BootstrapVue)
localVue.use(Vuex)
localVue.use(VueRouter)

describe('Navbar.vue', () => {
  let wrapper
  let store
  let router
  const auth = {
    namepaced: true,
    state: {
      isAuthenticated: false
    },
    mutations: {
      setAuthentication(state, val) {
        state.isAuthenticated = val
      }
    },
    actions: {
      setAuth({ commit }, params) {
        commit('setAuthentication', params)
      },
      [LOGOUT]({ commit }, params) {
        new Promise((resolve, reject) => {
          resolve()
        })
      }
    }
  }
  const $router = {
    push: jest.fn(() => { })
  }
  const push = jest.spyOn($router, 'push');
  beforeEach(() => {
    store = new Vuex.Store({
      modules: { auth }
    })
    router = new VueRouter()
    wrapper = mount(Navbar, {
      store,
      localVue, router,
      mocks: {
        $router
      },
      stubs: ['router-link']
    })
  })
  it('should show login/register if not authenticated', () => {
    store.dispatch('setAuth', false)
    const navItems = wrapper.findAll('.nav-item');
    expect(navItems.length).toBe(3)
  })

  it('should show login/register username if authenticated', () => {
    store.dispatch('setAuth', true)
    const navItems = wrapper.findAll('.nav-item');
    const dropdown = navItems.at(2)
    const firstA = dropdown.findAll('.dropdown-toggle')
    const username = firstA.at(0).text();
    expect(username).toBe('admin')
  })

  it('should redirect user if authenticated', () => {
    store.dispatch('setAuth', true)
    wrapper.vm.signout()
    expect(push).not.toHaveBeenCalled()
  })

  it('should set active menu item', () => {
    store.dispatch('setAuth', true)
    wrapper.vm.setActiveMenuItem('home')
    expect(wrapper.vm.activeItem).toBe('home')
  })
})
