<template>
    <section class="channel-h5 top-home">
        <div class="channel-h5__header" :class="title1?'':'hide'">
            <!-- <p class="channel-h5__title">
                <slot name="title"></slot>
            </p>     -->
            <div  class="book-list-top" >
                <h2  class="book-list-title">
                    {{title1}}
                </h2>
                <div  class="book-list-more fr">
                    <a  style="color:red" @click="setMoreData()">更多</a>
                </div>
            </div>
        </div>
        <ul class="list-h5" :style="padding">
            <li v-for="(item,index) in listData" v-if="ind?index<ind:index<listData.length" @click="toBook(item._id)">
                    <div class="book-h5">
                        <div class="book-h5__cover">
                            <img :alt="item.title" :src="'http://statics.zhuishushenqi.com'+item.cover">
                            <p class="book-h5__finish">完结</p>
                        </div>
                        <div class="book-h5__info">
                            <p class="book-h5__title">{{item.title}}</p>
                            <p class="book-h5__author"><img src="/static/img/people.png">{{item.author}}</p>
                            <p class="book-h5__summary">{{item.shortIntro}}</p>
                            <div class="book-h5__wrap" v-show="item.majorCate">
                                <div class="book-h5__tag">{{item.majorCate}}</div>
                                <div class="book-h5__tag">{{item.minorCate}}</div>
                            </div>
                        </div>
                    </div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
  name: 'hot',
  props:{
      listData:Array,
      ind:Number,
      title:String,
      padding:String
  },
  data(){
      return{
          title1:this.title
      }
  },
  methods:{
      toBook:function(id){
        console.log(id)
        this.$router.push({ name: 'book', query: {id: id} });
      },
      setMoreData(){
          this.$router.push({ name: 'more'})
          this.$store.state.moreData = this.listData;
          this.$store.state.title = this.title;
          console.log(this.$store.state.moreData)
      }
  },
  mounted:function(){
      var that = this;
      this.title1 = this.title;
  }
}
</script>

<style>
    .hide{
        display: none;
    }
    .channel-h5 {
        background: #fff;
        border-bottom: 10 solid #f5f5f5;
        position: relative;
    }
    .channel-h5__header {
        padding: 10px 0px 2px 13px;
        border-bottom: 1px solid #f0f0f0;
        position: relative;
    }

    .list-h5 {
        padding: 0 13px;
    }

    .list-h5 li {
        padding: 17px 0;
        border-bottom: 1px solid #f0f0f0;
    }

    .book-h5 {
        overflow: hidden;
        cursor: pointer;
    }

    .book-h5__cover {
        float: left;
        position: relative;
        width: 85px;
        height: 113px;
        background-color: #eeece9;
        border: 1px solid #f0f0f0;
        border-radius: 1px;
        overflow: hidden;
        box-shadow: 0px 0px 3px 4px #734948;
    }

    .book-h5 img {
        width: 100%;
        height: 100%;
        border-radius: 1px;
    }

    .book-h5__finish {
        position: absolute;
        bottom: 0px;
        width: 100%;
        color: #fff;
        padding: 25px 7px 2px;
        background: -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.3));
    }

    .book-h5 .book-h5__info {
        margin-left: 100px;
        padding-top: 6px;
        background: #fff;
    }

    .book-h5__title {
        margin-bottom: 4px;
        font: 16px/17px a;
        color: rgba(0,0,0,0.9);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-shadow: -1px -1px white, 1px 1px #333;
        text-align: left;
    }

    .book-h5__author {
        margin-top: 8px;
        font: 12px/12px a;
        color: rgb(77, 0, 0);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 25px;
        text-align: left;
    }

    .book-h5__summary {
        margin: 8px 0 0;
        height: 2.8em;
        font: 12px/1.4em a;
        color: rgba(0,0,0,0.6);
        overflow: hidden;
        text-overflow: ellipsis;
        /* white-space: nowrap; */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .book-h5__wrap {
        margin: 10px;
        padding-top: 3px;
        overflow: hidden;
    }

    .book-h5__info>.book-h5__author>img {
        width: 16px;
        height: 16px;
        margin-top: -2px;
        margin-right: 2px;
    }

    .book-h5 img {
        width: 100%;
        height: 100%;
        border-radius: 1px;
    }

    .book-h5__tag {
        float: left;
        margin: -3px 7px 5px 0;
        padding: 3px 6px 2px;
        max-width: 6em;
        font: 10px/11px a;
        color: #e53e0d;
        border: 1px solid #e53e0d;
        border-radius: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .book-list-top {
        position: relative;
        margin-bottom: 5px;
        overflow: hidden;text-align: left;
    }

    .book-list-top .book-list-title {
        font-weight: 400;
        display: inline-block;
        color: #33373d;
        line-height: 1;
        border-left: 2px solid #ed424b;
        padding-left: 8px;
        font-size: 16px;
        
    }

    .book-list-top .book-list-more {
        display: inline-block;
        float: right;
    }

    .book-list-top .book-list-more a {
        position: absolute;
        top: 2px;
        right: 15px;
        font-size: 13px;
    }
</style>
