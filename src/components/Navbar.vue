<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">
        <b-navbar-brand href="#">
          <router-link to="/">medium</router-link>
          </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-bind:class="{ active: activeItem === 'home'}">
              <router-link to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item v-if="isAuthenticated" v-bind:class="{ active: activeItem === 'editor_new' || activeItem === 'editor_existing'}">
              <font-awesome-icon icon="pen-square" />
              <router-link to="/editor">New Article</router-link>
            </b-nav-item>
            <b-nav-item v-if="!isAuthenticated" v-bind:class="{ active: activeItem === 'login'}">
              <font-awesome-icon icon="pen-square" />
              <router-link to="/login">Sign in</router-link>
            </b-nav-item>
            <b-nav-item v-if="!isAuthenticated" v-bind:class="{ active: activeItem === 'register'}">
              <font-awesome-icon icon="pen-square" />
              <router-link to="/register">Sign up</router-link>
            </b-nav-item>

            <b-nav-item-dropdown right v-if="isAuthenticated" v-bind:class="{ active: activeItem === 'user_profile'}">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{username}}</em>
              </template>
              <b-dropdown-item @click="navigateToProfile">Profile</b-dropdown-item>
              <b-dropdown-item @click="signout" class="logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { LOGOUT } from '../store/types/actions.type'
export default {
  name: 'navbar',
  data () {
    return {
      activeItem: 'home'
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated
    },
    username () {
      return this.$store.state.auth.username || 'admin'
    }
  },
  methods: {
    signout () {
      this.$store.dispatch(LOGOUT)
        .then(() => {
          if (this.$route.name !== 'home') {
            this.$router.push({ name: 'home' })
          }
        })
    },
    navigateToProfile () {
      this.$router.push({ name: 'user_profile', params: { user: this.username } })
    },
    setActiveMenuItem (name) {
      this.activeItem = name
    }
  },
  created () {
    this.setActiveMenuItem(this.$route.name)
  },
  watch: {
    $route (to, from) {
      this.setActiveMenuItem(to.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  .nav-item {
    font-size: 14px;
    opacity: 0.5;
    color: #3d3438;
    &.active {
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
  }
  a {
    color: #3d3438;
    svg {
      margin-right: 3px;
    }
    &:hover {
      color: #3d3438;
      text-decoration: none;
    }
  }
  em {
    color: #3d3438;
  }
  .navbar-brand {
    font-weight: 800;
    color: #3d3438;
  }

    .dropdown-menu{
      .logout a{
        color: red;
      }
    }
}
</style>
