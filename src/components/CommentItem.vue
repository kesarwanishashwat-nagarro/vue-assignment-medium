<template>
    <div class="card">
        <div class="card-block">
            <p class="card-text">{{comment.body}}</p>
        </div>
        <div class="card-footer">
            <div class="comment-author-image">
                <img :src="comment.author.image" alt="author image" height="100%" width="100%">
            </div>
            <a class="comment-author">{{comment.author.username}}</a>
            <span class="date-posted">{{comment.createdAt}}</span>
            <span class="mod-options" v-if="comment.author.username === user">
                <font-awesome-icon class="icon delete" icon="trash-alt" @click="onTrashClick" />
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        comment:{ type: Object, required: true }
    },
    data(){
        return {
            user: this.$store.state.auth.username
        }
    },
    methods: {
        onTrashClick(){
            this.$emit('trashClick', this.comment.id);
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        margin: 20px 0px;
        border: 1px solid darkslategray;
        .card-block{
            min-height:50px;
            padding:10px;
        }
        .card-footer{
            font-size: 14px;
            background: darkslategray;
            .comment-author-image{
                height: 20px;
                width: 20px;
                display: inline-block;
                margin-right: 8px;
            }
            .comment-author{
                margin-right: 8px;
                color: aquamarine;
            }
            .date-posted{
                color: darkgray;
                font-size: 12px;
            }
            .mod-options{
                float: right;
                cursor: pointer;
                .icon{
                    margin-right: 15px;
                    &:last-child{
                        margin-right: 0px;
                    }
                    &:hover{
                        transform: scale(1.2);
                        transition: transform 0.5s ease-in-out;
                    }
                    &.delete,&.cross{
                        color: lightpink;
                    }
                    &.edit{
                        color: lightyellow;
                    }
                    &.save{
                        color: aquamarine;
                    }
                }
            }
        }
    }
</style>