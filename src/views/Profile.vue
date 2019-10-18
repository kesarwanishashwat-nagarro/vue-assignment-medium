<template>
  <div class="profile-page">
    <HeadingBar backColor="#f3f3f3"></HeadingBar>
    <div class="container profile-container">
      <div class="img-contain">
        <img :src="profile.image" alt="your image" height="100%" width="100%" />
      </div>
      <h1>{{profile.username}}</h1>
      <div class="content">
        <b-tabs pills card v-model="tabIndex">
          <b-tab title="My Articles" @click="selectArticleCategory(0)">
            <b-card-text>
              <template v-for="article in myArticles">
                <ArticleCard v-bind:key="article.slug" :article="article"></ArticleCard>
              </template>
              <template v-if="myArticles && myArticles.length === 0">
                <h6>No articles are here... yet.</h6>
              </template>
            </b-card-text>
          </b-tab>
          <b-tab title="Favorited Articles" @click="selectArticleCategory(1)">
            <b-card-text>
              <template v-for="article in favorited">
                <ArticleCard v-bind:key="article.slug" :article="article"></ArticleCard>
              </template>
              <template v-if="favorited && favorited.length===0">
                <h6>No articles are here... yet.</h6>
              </template>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingBar from "@/components/HeadingBar.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import { GET_PROFILE, GET_PROFILE_ARTICLES  } from "../store/types/actions.type";
export default {
  data(){
    return {
      tabIndex: 0,
      page: 1,
      user: this.$route.params.user
    }
  },
    components: {
      HeadingBar,
      ArticleCard
    },
    computed: {
      profile(){
        return this.$store.state.shared.selectedProfile;
      },
      myArticles(){
        return this.$store.state.article.myArticles || [];
      },
      favorited(){
        return this.$store.state.article.favoritedArticles || [];
      }
    },
    created() {
    if (this.$store.state.auth.isAuthenticated) {
      this.$store.dispatch(GET_PROFILE, this.user);
      this.selectArticleCategory(0);
    }
    else{
      this.$router.push({name: 'login'})
    }
  },
  methods: {
    selectArticleCategory(type) {
      this.tabIndex = type;
      const payload = {
        type: type,
        page: this.page,
        user: this.user
      };
      this.$store.dispatch(GET_PROFILE_ARTICLES, payload);
    }
  },
}
</script>

<style lang="scss">
  .profile-page{
    .jumbotron{
      height:230px;
    }
    .profile-container{
      margin-top: -200px;
      .img-contain{
        height: 80px;
        width: 80px;
        border-radius: 50%;
        margin: 20px auto;
      }
      .content{
        max-width: 75%;
        margin: 50px auto 20px auto;
      }
    }
  }
</style>
