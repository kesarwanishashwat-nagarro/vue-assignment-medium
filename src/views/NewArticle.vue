<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" class="form-control" v-model="tagString" placeholder="Enter tags comma seperated" />
                <div class="tag-list"></div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="saveArticle"
              >Save Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ARTICLE_UPDATE,
  GET_ARTICLE,
  ARTICLE_CREATE
} from '../store/types/actions.type'
export default {
  data () {
    return {
      slug: this.$route.params.articleDesc,
      tagString: ''
    }
  },
  computed: {
    article () {
      return this.slug ? this.$store.state.article.selected : {
        body: '',
        description: '',
        title: '',
        tagList: []
      }
    },
    tags () {
      return this.article ? this.article.tagList : []
    }
  },
  created () {
    if (this.$store.state.auth.isAuthenticated) {
      if (this.slug) {
        this.$store.dispatch(GET_ARTICLE, this.slug)
          .then(() => {
            this.article.tagList.forEach(tag => {
              this.tagString += ',' + tag
            })
            this.tagString = this.tagString.substring(1, this.tagString.length - 1)
          })
      }
    } else {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    saveArticle () {
      const params = {
        routeParam: this.slug || null,
        payload: this.article
      }
      params.payload.tagList = this.tagString.split(',')
      if (this.slug) {
        this.$store.dispatch(ARTICLE_UPDATE, params).then(data => {
          if (data && data.article) {
            this.$router.push({
              name: 'article',
              params: {
                articleDesc: this.slug
              }
            })
          }
        })
      } else {
        this.$store.dispatch(ARTICLE_CREATE, params).then(data => {
          if (data && data.article) {
            this.$router.push({
              name: 'article',
              params: {
                articleDesc: data.article.slug
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-page {
  margin-top: 20px;
  button {
    &.btn-primary {
      float: right;
    }
  }
}
</style>
