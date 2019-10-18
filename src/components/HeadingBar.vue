<template>
    <div class="jumbotron text-white" 
    v-bind:style="{background: backgroundColor || 'auto'}">
      <div class="data">
        <h1 class="display-3">{{title}}</h1>
        <p class="lead">
          {{subTitle}}
        </p>
      </div>
    </div>
</template>

<script>

export default {
  name: 'heading-bar',
  props: {
    title: String,
    subTitle: String,
    backColor: ''
  },
  computed: {
    backgroundColor(){
      return this.backColor;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .jumbotron{
    border-radius: unset;
    padding-top: 30px;
    padding-bottom: 55px;
    margin-bottom: 0px;
    background: url(../assets/blog-header-background.jpg);
    // background-size: 100% 100%;
    .display-3{
      font-weight: 800;
      font-size: 3.0rem;
      text-shadow: grey 2px 1px;
    }
  }
</style>
