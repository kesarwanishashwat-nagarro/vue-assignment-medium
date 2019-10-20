<template>
  <div class="home">
    <HeadingBar title="medium" subTitle="A place to share your knowledge."></HeadingBar>
    <div class="container home-content">
      <section class="left">
        <b-tabs pills card v-model="tabIndex">
          <template v-for="tab in tabs">
            <b-tab :key="tab.index" v-if="tab.show" :title="tab.name" @click="tab.callback">
              <b-card-text>
                <template v-for="article in articlesFeed">
                  <ArticleCard v-bind:key="article.slug" :article="article" @tagClicked="cardTagSelected"></ArticleCard>
                </template>
                <template v-if="articlesFeed && articlesFeed.length<=0">
                  <h6>{{tab.name}} does not contain any articles...</h6>
                </template>
              </b-card-text>
            </b-tab>
          </template>
        </b-tabs>
        <Paging v-if="totalRows/10 > 1" :totalRecords="totalRows" :currentPage="pageNumber" :perPage="10"
        @pageChanged="onPageChange($event)"></Paging>
      </section>
      <section class="right">
        <div class="tags">
          <h6>Popular Tags</h6>
          <ul class="tag-items">
            <li class="tag-item" v-bind:key="item" v-for="(item,index) in tags" 
            @click="selectTag(item, index)" :class="{'active': selectedTagIndex === index}">{{item}}</li>
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
      tabIndex: this.$store.state.home.feed || 1,
      pageNumber: this.$store.state.home.page || 1,
      selectedTagIndex: -1,
      tabs: [
        {
          name: 'Your Feed',
          show: this.$store.state.auth.isAuthenticated || false,
          index: 0,
          callback: () => this.setFeed(1, this.tabs[0])
        },
        {
          name: 'Global Feed',
          show: true,
          index: 1,
          callback: () => this.setFeed(1, this.tabs[1])
        },
        {
          name: 'Tag Feed',
          show: false,
          index: 2,
          callback: () => this.selectTag(this.tags[this.selectedTagIndex], this.selectedTagIndex)
        }
      ],
      selectedTab: null
    }
  },
  components: {
    HeadingBar,
    ArticleCard,
    Paging
  },
  methods: {
    setFeed (page, tab, tag = null) {
      setTimeout(() => {
        this.pageNumber = page
        this.selectedTab = tab
        this.tabIndex = tab.index
      })

      const payload = {
        type: tab.index,
        page: page
      }
      if (tag) {
        payload.tag = tag
      }
      this.$store.dispatch(UPDATE_PAGE_DATA, { page: page, feed: this.tabIndex })
      this.$store.dispatch(GET_ARTICLES, payload)
    },
    onPageChange ($event) {
      if (this.pageNumber !== $event) {
        this.setFeed($event,
          this.selectedTab, this.selectedTab.name.indexOf('#') >= 0 ? this.selectedTab.name.substring(1) : null)
      }
    },
    selectTag (tag, index) {
      if(this.selectedTagIndex != index){
        this.selectedTagIndex = index
        this.tabs[2].name = '#' + tag
        this.tabs[2].show = true
        this.setFeed(1, this.tabs[2], tag)
      }
    },
    cardTagSelected ($event) {
      this.selectedTagIndex = this.tags.indexOf($event)
      this.selectTag($event, this.selectedTagIndex)
    }
  },
  computed: {
    articlesFeed () {
      return this.$store.state.home.articlesList || []
    },
    totalRows () {
      return this.$store.state.home.articlesCount
    },
    tags () {
      return this.$store.state.home.tags || []
    },
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated || false
    }
  },
  created () {
    this.setFeed(1, this.tabs[1])
  },
  mounted () {
    this.$store.dispatch(GET_TAGS)
  },
  watch: {
    isAuthenticated (newVal, oldVal) {
      this.tabs[0].show = newVal
      this.tabs[1].index = newVal ? 1 : 0;
    }
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
