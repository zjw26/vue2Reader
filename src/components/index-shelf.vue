<template>
<div class="shelf">
	<div class="shelf__top">
		<div class="shelf__switch"></div>
		<a href="/search">
			<div class="shelf-search">输入书名/作者/关键字</div>
		</a>
	</div>
	<ul class="book-list" id="shelf" style="margin-bottom:50px;">
		<li v-for="(item, index) in shelfData"   @click="readBook(index)">
			<div class="u-book">
				<div class="bookmark">
					<img src="/static/img/bookmark.png" alt="">
				</div>
				<div class="bookRm" @click="bookRm(index)">
					<img src="/static/img/delete.png" alt="">
				</div>
				<a>
					<div class="book-cover">
						<img alt="" v-bind:src="'http://statics.zhuishushenqi.com'+item.cover">
					</div>
				</a>
				<div class="info">
					<h3 class="title" style="text-align:left;">{{item.title}}</h3>
					<p class="author" style="text-align:left;">
						<img src="/static/img/people.png" style="width:16px;height:16px;margin-top:-2px;">
						<span class="author">{{item.author}}</span>
					</p>
					<div class="wrap" style="text-align:left;">
						<p>{{item.lastChapter}}</p>
					</div>
				</div>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
import api from '../fetch/api.js'
export default {
  name: 'shelf',
  data(){
      return {
          shelfData:[],
      }
  },
  methods:{
      readBook:function(index){
        let chapterId=this.shelfData[index].chapterId;
        let bookId=this.shelfData[index].bookId;
        let chapterIndex=this.shelfData[index].chapterIndex;
        location.href = "/reader?id="+chapterId+"&book="+bookId+"&index="+chapterIndex;
      },
      bookRm:function(index){
        event.cancelBubble = true;
        this.shelfData.splice(index,1);
        var shelf=JSON.parse(localStorage.getItem('shelf'))
        shelf.splice(index,1);
        localStorage.setItem('shelf',JSON.stringify(shelf));
      },
      getShelfBook:function(){
        var shelf=JSON.parse(localStorage.getItem('shelf'))?JSON.parse(localStorage.getItem('shelf')):[];
        var that = this;
        console.log(shelf);
        for(let i=0;i<shelf.length;i++){
            var id=shelf[i].bookId;
            api.getBook(id).then((data)=>{
                console.log(data)
                that.shelfData.push(data);
                // that.shelfData=[...that.shelfData];
                console.log(that.shelfData)
            })
        }
      }

  },
  mounted:function(){
      this.getShelfBook();
  }
}
</script>

<style>
    .shelf__top {
		padding: 10px 20px 0;
	}
	.shelf__top .shelf-search {
		margin-right: 46px;
	}
	.shelf-search {
		font-size: 12px;
		color:#ccc;
		border:1px solid #eee;
		border-radius: 4px;
		line-height: 36px;
		background:url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01dSYLeWtSR/tY73MgTfVw7UAS.png) no-repeat 10px center;
		background-size: 14px;
		padding-left: 32px;
        text-align:left;
	}
	.shelf__switch {
		width: 36px;
		height: 36px;
		float: right;
		border-radius: 4px;
		background:url(http://image.read.duokan.com/mfsv2/download/fdsc3/p01yLF3fEj8l/b7UfAdlfufQKML.png) no-repeat center;
		background-size: 16px;
		border:1px solid #eee;
	}

.shelf .book-list .u-book{
	padding:13px 20px;
	width: auto; 
}
.u-book .book-cover {
	float: left;
	margin-right: 10px;
}
.u-book .info {
	padding-top: 1.2em;
}

.u-book {
    width: 86px;
    position: relative;
    overflow: hidden;
}

.book-list li {
    border-bottom: 1px solid #f0f0f0;
}

#shelf .u-book .bookmark>img {
	
    position: absolute;
    top: 110px;
    left: 101px;
    width: 20px;
    height: 20px
}


#shelf .u-book .bookRm{
	position: absolute;
    top: 20px;
    right: 0px;
    width: 40px;
    height: 40px;
}

#shelf .u-book .bookRm>img{
	width:50%;
}

.book-cover img {
    width: 100%;
    height: 100%;
}

.book-cover {
    position: relative;
    width: 86px;
    height: 113px;
    background-color: #eeece9;
    box-shadow: 0px 6px 5px -3px #aaa;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    overflow: hidden;
}

.u-book .info {
    padding-top: 1.2em;
}

.u-book .title {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
}

.u-book .author, .u-book .read, .u-book .book-tag, .u-book .extra {
    margin-top: 4px;
    font-size: 12px;
    color: #8d8d8d;
}
.book-cover:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
