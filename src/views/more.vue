<template>
  <div>
    <back-bar :title="title"></back-bar>
    <index-list :listData="listData" :ind="listData.length" :padding="'padding: 40px 13px 57px;'">
    </index-list>
  </div>
</template>

<script>
import indexList from "../components/index-list";
import backBar from "../components/back-bar";
export default {
  name: 'more',
  data(){
    return {
      listData : [],
      title:''
    }
  },
  components:{
    indexList,
    backBar
  },
  mounted:function(){
    this.listData = this.$store.state.moreData;
    this.title = this.$store.state.title;
    console.log(this.listData)
  }
}
</script>

<style>
</style>
