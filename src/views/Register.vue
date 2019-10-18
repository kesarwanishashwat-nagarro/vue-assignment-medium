<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center need-text">
            <router-link to="/login">Have an account?</router-link>
          </p>
          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name" v-model="user.username"/>
              <template v-if="errors">
                <div class="error" v-bind:key="index" v-for="(error,index) in errors.username">
                Your Name {{errors.username[index]}}
              </div>
              </template>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="user.email" />
              <template v-if="errors">
                <div class="error" v-bind:key="index" v-for="(error,index) in errors.email">
                  Email {{errors.email[index]}}</div>
              </template>
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="user.password" />
              <template v-if="errors">
                <div class="error" v-bind:key="index" v-for="(error,index) in errors.password">
                  Password {{errors.password[index]}}
                </div>
              </template>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" :disabled="!isValid" @click="register">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { REGISTER, SHOW_LOADER, HIDE_LOADER } from '../store/types/actions.type'

export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        username: ''
      },
      errors: null
    }
  },
  computed: {
    isValid () {
      return this.user.email && this.user.password && this.user.username
    }
  },
  methods: {
    register () {
      this.$store.dispatch(SHOW_LOADER)
      this.$store
        .dispatch(REGISTER, this.user)
        .then(() => {
          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          this.errors = error.errors
        })
        .finally(() => {
          this.$store.dispatch(HIDE_LOADER)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-page{
    margin-top: 20px;
    .need-text a{
      color: green;
    }
    button{
      &.btn-primary{
        width: 100%
      }
    }
    form{
      text-align: left
    }
}
</style>
