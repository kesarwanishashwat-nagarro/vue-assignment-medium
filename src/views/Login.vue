<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center need-text">
            <router-link to="/register">Need an account?</router-link>
          </p>

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="email" />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password" />
              <template v-if="errors">
                <div class="error" v-bind:key="index" v-for="(error,index) in errors['email or password']">
                  email or password {{errors['email or password'][index]}}
                </div>
              </template>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click="login" :disabled=!isValid>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-page {
  margin-top: 20px;
  .need-text a {
    color: green;
  }
  button {
    &.btn-primary {
      width: 100%;
    }
  }
}
</style>

<script>
import { LOGIN, SHOW_LOADER, HIDE_LOADER } from "../store/types/actions.type";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    login() {
      const obj = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch(SHOW_LOADER);
      this.$store
        .dispatch(LOGIN, obj)
        .then(() => {
          this.$router.push({ name: "home" })
        })
        .catch((error) => {
          this.errors = error.errors;
        })
        .finally(() => {
          this.$store.dispatch(HIDE_LOADER)
        });
    }
  },
  computed:{
    isValid(){
      return this.email && this.password
    }
  }
};
</script>

<style lang="scss" scoped>
  form{
    text-align: left;
  }
</style>
