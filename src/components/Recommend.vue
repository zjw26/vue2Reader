<template>
    <section class="recommend">
        <template v-if="recommendList.length > 0">
            <h4>同类推荐
                <a @click="setMoreData()" class="more red">更多</a>
            </h4>
            <ul class="recommend-list">
                <li class="recommend-item" v-for="(recommend, index) in recommendList" v-if="index < 4" :key="recommend._id" @click="toBook(recommend._id)">
                    <img :src="recommend.cover | setCover" alt="recommend.title" class="cover">
                    <p>{{ recommend.title }}</p>
                </li>
            </ul>
        </template>
    </section>
</template>

<script>
import api from '../fetch/api';

export default {
    name: 'recommend',
    props:{
        bookId:String
    },
    data() {
        return {
            recommendList: [],
            staticPath:'http://statics.zhuishushenqi.com'
        }
    },
    filters: {
        setCover(cover) {
            return 'http://statics.zhuishushenqi.com' + cover;
        }
    },
    computed: {
    },
    created() {
        api.getRecommend(this.bookId)
            .then(data => {
                this.recommendList = data;
            })
    },
    methods:{
        toBook(id){
               location.href="/book?id="+id;
        },
        setMoreData(){
          this.$router.push({ name: 'more'})
          this.$store.state.moreData = this.recommendList;
          this.$store.state.title = '更多';
          console.log(this.$store.state.moreData)
        }
    }
}
</script>

<style lang="scss">
.recommend {
    position: relative;
    overflow: hidden;

    h4 {
        font-weight: 400;
        font-size: 16px;
        color: #33373d;
        line-height: 1;
        border-left: 2px solid #ed424b;
        padding-left: 13px;
        margin: 10px 0;

        a {
            position: absolute;
            top: 12px;
            right: 15px;
            font-size: 13px;

            &::after {
                content: '>';
                display: inline-block;
                margin-left: 3px;
            }
        }
    }
    .recommend-list {
        position: relative;
        display: flex;

        .recommend-item {
            flex: 1;
            padding: 0 15px;
        }
        .cover {
            width: 60px;
            height: 80px;
        }
    }
}
</style>
