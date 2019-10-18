<template>
    <div>
        <b-pagination
        v-model="pageNumber"
        :total-rows="totalRecords"
        :per-page="perPage"
        @change="changePage"
        >
        <template v-slot:first-text><span class="text-success">First</span></template>
      <template v-slot:prev-text><span class="text-danger">Prev</span></template>
      <template v-slot:next-text><span class="text-warning">Next</span></template>
      <template v-slot:last-text><span class="text-info">Last</span></template>
      <template v-slot:ellipsis-text>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </template>
      <template v-slot:page="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </template>
        </b-pagination>
    </div>
</template>

<script>
export default {
    data(){
      return {
        pageNumber: this.currentPage
      }
    },
    props:{
        totalRecords: {type: Number, required: true},
        currentPage: {type: Number, required: true, default: 1},
        perPage: {type: Number, required: true},
    },
    methods: {
      changePage(page){
        this.$emit('pageChanged', page);
      }
    }
}
</script>

<style lang="scss" scoped>
    ul.pagination{
        max-width: 500px;
        margin: 0px auto;
    }
</style>