<template>
  <div class="article-card-container">
    <div class="card" @click="selectArticle">
      <div class="card-header">
        <div class="left">
          <div class="left-content">
            <div class="header-image">
              <img
                :src="selectedArticle.author.image"
                alt="author image"
                height="100%"
                width="100%"
              />
            </div>
            <div class="header-text">
              <h5 class="card-title">{{selectedArticle.author.username}}</h5>
              <h6 class="card-subtitle text-muted mb-2">{{selectedArticle.createdAt}}</h6>
            </div>
          </div>
        </div>
        <div class="right">
          <div
            class="favor-box"
            v-bind:class="{'favorite':selectedArticle.favorited,'unfavorite': !selectedArticle.favorited}"
            @click="toggleFavorite($event)"
            v-if="article.author.username !== user"
          >
            <font-awesome-icon icon="heart" />
            <span>{{selectedArticle.favoritesCount}}</span>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="card-body">
        <h4 class="card-text article-title">{{selectedArticle.title}}</h4>
        <p class="card-text article-desc">{{selectedArticle.description}}</p>
      </div>
      <div class="card-footer">
        <div class="left">
          <p class="footer-text">Read more...</p>
        </div>
        <div class="right">
          <ul class="tag-items">
            <li
              class="tag-item"
              v-bind:key="item"
              v-for="item in selectedArticle.tagList"
              @click="filterByTag($event, item)"
            >{{item}}</li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { FAVORITE_REMOVE, FAVORITE_ADD } from '../store/types/actions.type'
export default {
  name: 'article-card',
  data () {
    return {
      actions: {
        type: Boolean,
        required: false,
        default: false
      },
      selectedArticle: this.article,
      user: this.$store.state.auth.username
    }
  },
  props: {
    article: { type: Object, required: true },
    canModify: { type: Boolean, required: false }
  },
  methods: {
    toggleFavorite (e) {
      e.stopPropagation()
      if (!this.isAuthenticated) {
        this.$router.push({ name: 'login' })
        return
      }
      if (this.article.author.username !== this.user) {
        const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD
        this.$store.dispatch(action, this.article.slug).then(article => {
          if (article) {
            this.selectedArticle = article
          }
        })
      }
    },
    selectArticle () {
      this.$router.push({
        name: 'article',
        params: { articleDesc: this.article.slug }
      })
    },
    filterByTag (e, item) {
      e.stopPropagation()
      this.$emit('tagClicked', item)
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated || false
    },
    tags () {
      return this.$store.state.home.tags || []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.article-card-container {
  text-align: left;
  .card {
    border-bottom: solid 1px lightgrey;
    margin: 20px 0px;
    cursor: pointer;
    &:hover {
      box-shadow: 2px 2px 10px lightgray;
      background-color: #f3f5f8;
    }
    .card-header {
      background: none;
      border: none;
      .left {
        padding: 0px;
        .left-content {
          display: flex;
          .header-image {
            height: 30px;
            width: 30px;
            display: inline-block;
            border-radius: 50%;
            margin-right: 5px;
          }
          .header-text {
            .card-title {
              color: limegreen;
              margin-bottom: 7px;
              font-size: 16px;
            }
            .card-subtitle {
              color: lightgray;
              font-size: 11px;
            }
          }
        }
      }
      .right {
        .favor-box {
          border: 1px solid brown;
          padding: 2px 5px;
          color: brown;
          font-size: 12px;
          float: right;
          border-radius: 5px;
          &.favorite {
            color: #fff;
            background-color: rgb(174, 71, 76);
            &:hover {
              color: brown;
              background-color: rgba(174, 71, 76, 0.5);
            }
          }
          &.unfavorite {
            background-color: transparent;
            border: 1px solid brown;
            color: brown;
            &:hover {
              color: #fff;
              background-color: brown;
            }
          }
        }
      }
    }
    .card-body {
      padding: 0px 20px 10px 20px;
      .card-text {
        margin-bottom: 5px;
        &.article-title {
          font-weight: bolder;
        }
        &.article-desc {
          color: grey;
          font-size: 14px;
        }
      }
    }
    .card-footer {
      background: none;
      border: none;
      padding: 10px 20px 0px 20px;
      .left {
        padding: 0px;
        width: 50%;
        .footer-text {
          font-size: 12px;
          color: lightgray;
        }
      }
      .right {
        width: 50%;
        .tag-items {
          display: flex;
          padding: 0px;
          flex-direction: row-reverse;
          flex-wrap: wrap;
          word-break: break-all;
          margin: 2px;
          .tag-item {
            list-style-type: none;
            padding: 3px 5px;
            border: solid 1px lightgray;
            color: lightgray;
            border-radius: 40%;
            font-size: 12px;
            margin-right: 5px;
            &:hover {
              border-color: darkslategrey;
              color: darkslategrey;
            }
          }
        }
      }
    }
  }
}
</style>
