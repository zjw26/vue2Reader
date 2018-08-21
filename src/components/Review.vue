<template>
<section class="review">
    <h2>热门书评</h2>
    <ul class="review-list">
        <li class="review-item" v-for="(review,index) in reviewList">
            <img :src="review.author.avatar | setAvatar" :alt="review.author.nickname" class="avatar">
            <img src="/static/img/icon_slide.png"  class="slideImg" @click="slide(index)"> 
            <div class="review-content">
                <p class="name">{{ review.author.nickname }}<span class="time">{{ review.updated |time }}</span><span class="fr">{{index+1}}楼</span></p>
                <p class="title">{{review.title}}</p>
                <p class="content text-line-comm">{{review.content}}</p> 
            </div>
        </li>
        <div class="channel-group__footer" @click="moreReviews()">更多精彩评论&gt&gt</div>
        
        
    </ul>
</section>
</template>

<script>
import api from '../fetch/api';

import moment from 'moment';

export default {
    name: 'review',
    props:{
        bookId:String
    },
    data() {
        return {
            reviewList: [],
            staticPath:'http://statics.zhuishushenqi.com',
            reviewsNum:5
        }
    },
	filters: {
		time(update) {
			return moment(update).format('YYYY-MM-DD');
		},
        setAvatar(avatar) {
            return 'http://statics.zhuishushenqi.com' + avatar;
        }
	},
    computed: {

    },
    created() {
        api.getReview(this.bookId)
            .then(data => {
                this.reviewList = data;
            })
    },
    methods:{
			menu:function(id){
				location.href="/menu?id="+id;
			},

            slide:function(index){		
                var imgSrc=$('.review-list .review-item').eq(index).children(".slideImg").eq(0).attr('src');
                if(imgSrc=='/static/img/icon_slide.png'){
                    $('.review-list .review-item').eq(index).children(".slideImg").eq(0).attr('src','/static/img/icon_slide01.png');
                    $('.review-list .review-item').eq(index).find(".text-line-comm")[0].style.webkitLineClamp=1000;
                }else{
                    $('.review-list .review-item').eq(index).children(".slideImg").eq(0).attr('src','/static/img/icon_slide.png');
                    $('.review-list .review-item').eq(index).find(".text-line-comm")[0].style.webkitLineClamp=3;
                }
            },
            moreReviews:function(){
                this.reviewsNum=this.reviewsNum+5;
                var _this=this;
                console.log(this.reviewsNum)
                api.getReview(this.bookId,this.reviewsNum).then(data =>{
                    console.log(data)
                    this.reviewList = data;
                })
            },
    }
}
</script>

<style lang="scss">
.review {
        position: relative;
        padding-left: 15px;
        overflow: hidden;
        border-bottom: 10px solid #f6f7f9;
        text-align: left;
    }

    .review ul{
        margin:0;
    }

    .review p{
        margin:0;
    }
    .review h2 {
        line-height: 1;
        padding-top: 10px;
        font-weight: 400;
        font-size: 16px;
        margin: 0;
    }

    .review .review-list {
        position: relative;
        overflow: hidden;
        padding: 0;
    }

    .review .review-item {
        position: relative;
        overflow: hidden;
        padding: 10px 0;
        font-size: 12px;
        border-bottom: 1px solid #ebebeb;
    }

    .review .review-item .avatar {
        position: absolute;
        top: 10px;
        left: 0;
        width: 40px;
        height: 40px;
    }

    .review .review-item .review-content {
        margin-left: 50px;
        padding-right: 15px;
        /* margin-top: -15px; */
        text-align: left;
    }

    .review .review-item .review-content .name {
        color: #a58d5e;
    }

    .review .review-item .review-content .title {
        line-height: 2;
        font-weight: 700;
        /* white-space: nowrap; */
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .review .review-item .review-content .time {
        color: #999;
        padding-left: 5px;
    }

    .fr {
        float: right;
    }

    .review .review-item .review-content .content {
        line-height: 1.2;
    }

    .text-line-comm {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .slideImg{
        position: absolute;
        top: 60px;
        left: 20px;
        width: 20px;
        height: 20px;
    }

    .channel-group__footer {
        display: block;
        border-top: 1px solid #f0f0f0;
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        cursor: pointer;
    }
</style>
