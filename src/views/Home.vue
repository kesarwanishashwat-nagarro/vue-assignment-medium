<template>
  <div class="home">
    <HeadingBar title="medium" subTitle="A place to share your knowledge."></HeadingBar>
    <div class="container home-content">
      <section class="left">
        <b-tabs pills card v-model="tabIndex">
          <b-tab title="Your Feed" v-if="isAuthenticated" @click="setFeed(0, 1)">
            <b-card-text>
              <template v-for="article in userFeed">
                <ArticleCard v-bind:key="article.slug" :article="article"></ArticleCard>
              </template>
              <template v-if="userFeed && userFeed.length === 0">
                <h6>Your Feed does not contain any articles...</h6>
              </template>
            </b-card-text>
          </b-tab>
          <b-tab title="Global Feed" @click="setFeed(1, 1)">
            <b-card-text>
              <template v-for="article in globalFeed">
                <ArticleCard v-bind:key="article.slug" :article="article"></ArticleCard>
              </template>
              <template v-if="globalFeed && globalFeed.length===0">
                <h6>Global Feed does not contain any articles...</h6>
              </template>
            </b-card-text>
          </b-tab>
        </b-tabs>
        <Paging v-if="totalRows/10 > 1" :totalRecords="totalRows" :currentPage="pageNumber" :perPage="10"
        @pageChanged="onPageChange($event)"></Paging>
      </section>
      <section class="right">
        <div class="tags">
          <h6>Popular Tags</h6>
          <ul class="tag-items">
            <li class="tag-item" v-bind:key="item" v-for="item in tags">{{item}}</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadingBar from '@/components/HeadingBar.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import Paging from '@/components/Paging.vue'
import { GET_ARTICLES, GET_TAGS, UPDATE_PAGE_DATA } from '../store/types/actions.type'

export default {
  name: 'home',
  data () {
    return {
      activeFeed: 'global',
      tabIndex: this.$store.state.home.feed || 1,
      pageNumber: this.$store.state.home.page || 1
    }
  },
  components: {
    HeadingBar,
    ArticleCard,
    Paging
  },
  methods: {
    setFeed (type, page) {
      this.tabIndex = type
      this.pageNumber = page
      this.activeFeed = type === 1 ? 'global' : 'myFeed'
      const payload = {
        type: type,
        page: this.pageNumber
      }
      this.$store.dispatch(UPDATE_PAGE_DATA, { page: page, feed: this.tabIndex })
      this.$store.dispatch(GET_ARTICLES, payload)
    },
    onPageChange ($event) {
      if (this.pageNumber !== $event) {
        this.setFeed(this.tabIndex, $event)
      }
    }
  },
  computed: {
    globalFeed () {
      return this.$store.state.home.globalArticles || []
    },
    totalRows () {
      return this.activeFeed === 'global'
        ? this.$store.state.home.globalArticlesCount : this.$store.state.home.userFeedCount
    },
    userFeed () {
      return this.$store.state.home.userFeed || []
    },
    tags () {
      return this.$store.state.home.tags || []
    },
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated || false
    }
  },
  created () {
    this.setFeed(1, this.pageNumber)
  },
  mounted () {
    this.$store.dispatch(GET_TAGS)
  }
}
</script>

<style lang="scss">
.container {
  &.home-content {
    display: flex;
    margin-top: 10px;
    flex-direction: column-reverse;
    margin-bottom: 20px;
    .left {
      padding: 20px 0px;
      width: 100%;
    }
    .right {
      width: 100%;
      .tags {
        background-color: lightgrey;
        padding: 10px;
        text-align: left;
        border-radius: 3px;
        h6 {
          font-weight: bolder;
          color: #000;
        }
        .tag-items {
          display: flex;
          padding: 1px;
          flex-wrap: wrap;
          margin: 0px;
          .tag-item {
            color: #fff;
            background-color: darkslategrey;
            border-radius: 40%;
            padding: 5px 7px;
            font-size: 12px;
            list-style-type: none;
            margin: 2px;
            &.active {
              background-color: #fff;
              color: darkslategrey;
            }
            &:hover {
              background-color: #fff;
              color: darkslategrey;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .container {
    &.home-content {
      display: flex;
      margin-top: 10px;
      flex-direction: row;
      .left {
        width: 75%;
        padding: 0px 20px;
      }
      .right {
        width: 25%;
      }
    }
  }
}
</style>
