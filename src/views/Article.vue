<template>
  <div class="article-page">
    <HeadingBar :title="article ? article.title : ''" backColor="linear-gradient(45deg, black, transparent)"></HeadingBar>
    <div class="container article-container">
      <div class="top-container">
        <div class="user-image">
          <img :src="article ? article.author.image : ''" alt="author image" height="100%" width="100%" />
        </div>
        <div class="title-text">
          <p>{{article ?article.author.username: ''}}</p>
          <p>{{article ?article.createdAt : ''}}</p>
        </div>
        <div
          class="article-options"
          v-if="article && article.author.username === currentUser"
          @click="navigateEditor"
        >Edit Article</div>
        <div
          class="article-options delete"
          v-if="article && article.author.username === currentUser"
          @click="deleteArticle"
        >Delete Article</div>
        <div
          class="article-options favorite"
          v-bind:class="{'favorite':article && !article.favorited,'unfavorite': article && article.favorited}"
          v-if="article && article.author.username !== currentUser"
          @click="toggleFavorite"
        >{{article && article.favorited? 'Unfavorite' : 'Favorite'}} Article({{article ? article.favoritesCount : 0}})</div>
      </div>
      <div class="desc-text">
        <p>{{article ? article.body : ''}}</p>
      </div>
      <ul class="tag-items">
        <li class="tag-item" v-bind:key="item" v-for="item in tags">{{item}}</li>
      </ul>
      <div class="comments">
        <CommentForm v-if="isAuthenticated" @onCommentSubmit="addComment($event)"></CommentForm>
        <p v-if="!isAuthenticated">
          <router-link class="highlight" to="/login">Sign in</router-link>or
          <router-link class="highlight" to="/register">Sign up</router-link>to add comments on this article.
        </p>
        <div class="comment-list">
          <CommentItem
            v-bind:key="comment.id"
            v-for="comment in comments"
            :comment="comment"
            @trashClick="deleteComment"
          ></CommentItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadingBar from '@/components/HeadingBar.vue'
import CommentForm from '@/components/CommentForm.vue'
import CommentItem from '@/components/CommentItem.vue'
import {
  GET_ARTICLE,
  GET_COMMENTS,
  ARTICLE_DELETE,
  COMMENT_CREATE,
  COMMENT_DELETE,
  FAVORITE_REMOVE,
  FAVORITE_ADD
} from '../store/types/actions.type'
export default {
  data () {
    return {
      slug: this.$route.params.articleDesc,
      currentUser: this.$store.state.auth.username
    }
  },
  components: {
    HeadingBar,
    CommentForm,
    CommentItem
  },
  computed: {
    isAuthenticated () {
      return this.$store.state.auth.isAuthenticated || false
    },
    article () {
      return this.$store.state.article.selected
    },
    tags () {
      return this.article ? this.article.tagList : []
    },
    comments () {
      return this.$store.state.article.comments || []
    }
  },
  created () {
    this.$store.dispatch(GET_ARTICLE, this.slug)
    this.$store.dispatch(GET_COMMENTS, this.slug)
  },
  methods: {
    navigateEditor () {
      this.$router.push({
        name: 'editor_existing',
        params: {
          articleDesc: this.article.slug
        }
      })
    },
    deleteArticle () {
      this.$store.dispatch(ARTICLE_DELETE, this.slug).then(() =>
        this.$router.push({
          name: 'user_profile',
          params: {
            user: this.currentUser
          }
        })
      )
    },
    addComment ($event) {
      const params = {
        slug: this.slug,
        payload: { body: $event }
      }
      this.$store.dispatch(COMMENT_CREATE, params).then(() => {
        this.$store.dispatch(GET_COMMENTS, this.slug)
      })
    },
    deleteComment ($event) {
      const param = {
        slug: this.slug,
        commentId: $event
      }
      this.$store.dispatch(COMMENT_DELETE, param).then(() => {
        this.$store.dispatch(GET_COMMENTS, this.slug)
      })
    },
    toggleFavorite () {
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD
      this.$store.dispatch(action, this.article.slug)
    }
  }
}
</script>

<style lang="scss">
.article-page {
  .jumbotron {
    text-align: left;
    min-height: 180px;
    .data {
      width: 100%;
      margin: 0 auto;
      .display-3 {
        font-size: 45px;
        text-shadow: none;
        font-weight: 600;
      }
    }
  }
  .article-container {
    text-align: left;
    margin-top: -60px;
    padding: 0px 35px;
    .top-container {
      display: flex;
      .user-image {
        height: 30px;
        width: 30px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 10px;
      }
      .title-text {
        font-size: 10px;
        color: lightgray;
        margin-right: 20px;
        p {
          margin-bottom: 0px;
          &:first-child {
            font-size: 14px;
            color: #fff;
          }
        }
      }
      .article-options {
        color: lightgray;
        border: 1px solid lightgray;
        font-size: 14px;
        padding: 3px 8px;
        border-radius: 5px;
        margin-left: 10px;
        height: 30px;
        cursor: pointer;
        &.delete {
          border-color: bisque;
          color: bisque;
        }
        &:hover {
          border-color: #fff;
          color: #fff;
        }
        &.favorite{
          border-color: lightpink;
          color: lightpink;
          &:hover {
            background-color: lightpink;
            color: brown;
          }
        }
        &.unfavorite{
          background-color: lightpink;
          color: brown;
          &:hover {
            background-color: transparent;
            color: lightpink;
            border-color: lightpink;
          }
        }
      }
    }
    .desc-text {
      margin-top: 60px;
      font-size: 20px;
      overflow-wrap: break-word;
    }
    .tag-items {
      margin-top: 40px;
      display: flex;
      padding: 0px;
      padding-bottom: 30px;
      border-bottom: solid 1px lightgray;
      .tag-item {
        list-style-type: none;
        padding: 3px 5px;
        border: solid 1px lightgray;
        color: lightgray;
        border-radius: 40%;
        font-size: 12px;
        margin-right: 5px;
      }
    }
    .comment-list {
      margin-top: 60px;
      text-align: left;
    }
    .comments {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
  }
}

@media (min-width: 768px) {
  .article-page {
    .article-container {
      .comments {
        width: 70%;
      }
    }
  }
}

@media (min-width: 1024px) {
  .article-page {
    .jumbotron {
      .data {
        width: 75%;
      }
    }
    .article-container {
      .comments {
        width: 60%;
      }
    }
  }
}
</style>
