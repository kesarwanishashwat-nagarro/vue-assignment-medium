<template>
  <div id="app">
    <div class="overlay" v-if="isLoading"></div>
    <div class="loader" v-if="isLoading"></div>
    <Navbar></Navbar>
    <div class="content" v-bind:style="{ minHeight: minHeight + 'px'}">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading || false
    },
    minHeight () {
      const screenHeight = screen.height
      return screenHeight - 240
    }
  }
}
</script>

<style lang="scss">
@import './shared/_global.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .overlay{
    position: fixed;
    left:0px;
    top:0px;
    width:100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.7;
    z-index: 1;
  }
  .loader{
    position: fixed;
    width:50px;
    height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    border: solid 5px;
    border-top-color: red;
    border-right-color: blue;
    border-bottom-color: green;
    border-left-color:darkorange;
    border-radius: 50%;
    z-index: 2;
    // box-shadow: 50px 10px 10px black;
    animation: rotate 0.5s infinite;
  }

  @keyframes rotate {
    100%{
      transform: rotateZ(360deg);
    }
  }
}
</style>
