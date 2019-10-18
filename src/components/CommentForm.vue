<template>
    <form class="card comment-form" @submit.prevent="submitComment()">
      <div class="card-block">
        <textarea
          class="form-control"
          v-model="comment"
          placeholder="Write a comment..."
          rows="3"
        >
        </textarea>
      </div>
      <div class="card-footer">
        <img :src="userImage" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'comment-form',
  data () {
    return {
      comment: '',
      userImage: this.$store.state.auth.user.image
    }
  },
  methods: {
    submitComment () {
      this.$emit('onCommentSubmit', this.comment)
      this.comment = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-footer{
    button.btn-primary{
    float: right;
  }
}
</style>
