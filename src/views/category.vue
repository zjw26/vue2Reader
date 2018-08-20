<template>
    <div >	
		<back-bar :title="'分类'"></back-bar>
			<div class="new-page cate-page" data-track="ca" >
				<list-loading v-show="isLoading" style="top:40px;bottom:60px"></list-loading>
				<div class="u-area" style="margin-top:40px;">
					<section class="m-cat-male">
						<div class="u-ttl u-ttl-icn">
							<img src="/static/img/male.png" alt="" style="width:16px;height:16px;">  
							<h1>网文男频</h1>
						</div>
						<ul class="u-list-2col">
							<li v-for="item in category.male" @click="toDetail(item.name,'male')">
								<div class="u-cat-item" >
									<h3>{{item.name}}</h3>
									<p class="num">{{item.bookCount}}本</p>
								</div>
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[0]" alt="">
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[1]" alt=""> 
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[2]" alt=""> 
							</li>
						</ul>
					</section>
					<section class="m-cat-female">
						<div class="u-ttl u-ttl-icn">
							<img src="/static/img/female.png" alt="" style="width:16px;height:16px;"> 
							<h1>网文女频</h1>
						</div>
						<ul class="u-list-2col">
							<li v-for="item in category.female" @click="toDetail(item.name,'female')">
								<div class="u-cat-item">
									<h3>{{item.name}}</h3>
									<p class="num">{{item.bookCount}}本</p>
								</div>
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[0]" alt="">
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[1]" alt=""> 
								<img :src="'http://statics.zhuishushenqi.com'+item.bookCover[2]" alt=""> 
							</li>
						</ul>
					</section>
				</div>
			</div>				
	</div>
</template>

<script>
import backBar from "../components/back-bar";
import listLoading from "../components/list-loading";
import api from '../fetch/api.js';
import tabbar from '../components/tabbar'
export default {
  name: 'category',
  data(){
      return {
		  category:{},
		  isLoading:true,
      }
  },
  components:{
      backBar,
	  listLoading,
	  tabbar
  },
  methods:{
	  getCategory(){
		  var that = this;
		  api.getCategory().then((data)=>{
			  that.category = data;
			  that.isLoading = false;
			  
		  });
	  },
	 toDetail:function(name,sex){
		  console.log(name)
		  api.getCatBooks(sex,'hot',name).then(data=>{
			  console.log(data);
			  this.$store.state.moreData = data;
			  this.$store.state.title = name;
			  this.$router.push({ name: 'more' })
		  });
		  
	  }
  },
  mounted:function(){
	  this.getCategory();
  }
}
</script>

<style>
    .new-page {
		background: #fff;
		width: 100%;
		height: 100%;
		overflow: auto;
	}

	.u-area {
		margin: 0 10px;
		margin-top: -5px;
	}

	.u-ttl {
		margin-top: 10px;
		position: relative;
		line-height: 2.4em;
		border-bottom: 1px solid #eee;
		color: #8A8D8E;
		-webkit-box-sizing: border-box;
		text-align: left;
	}

	.u-ttl-icn h1 {
		margin-left: 5px;
	}

	.u-ttl h1 {
		display: inline-block;
		font-size: 15px;
		font-weight: 400;
	}

	.u-ttl-icn * {
		vertical-align: middle;
	}

	.u-list-2col li {
		float: left;
		width: 47%;
		margin: 2% 2% 0 0;
		position: relative;
	}

	.m-cat-male .u-cat-item {
		background: linear-gradient(#dac0c0, #4422b1);
	}

	.u-cat-item {
		width: 100%;
		height: 66px;
		padding: 21px 4% 0;
		background-color: #f1f1f1;
		background-size: 100%;
		background-position: right bottom;
		background-repeat: no-repeat;
		color: #515151;
		-webkit-box-sizing: border-box;
		background-size: auto;
		text-align: left;
	}

	.u-list-2col li img:nth-of-type(1) {
		top: 0px;
		right: 0;
		position: absolute;
	}

	.u-list-2col li>img {
		height: 50px;
		box-shadow: 3px 2px 2px #332929;
	}

	.u-list-2col li img:nth-of-type(2) {
		top: 4px;
		right: 13%;
		position: absolute;
	}

	.u-list-2col li img:nth-of-type(3) {
		top: 8px;
		right: 26%;
		position: absolute;
	}

	.u-ttl {
		margin-top: 10px;
		position: relative;
		line-height: 2.4em;
		border-bottom: 1px solid #eee;
		color: #8A8D8E;
		-webkit-box-sizing: border-box;
	}
	.u-cat-item h3 {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 3px;
}

.u-cat-item .num {
    font-size: 11px;
    line-height: 1em;
    color: #fff4f4;
}

.m-cat-female .u-cat-item {
    background: linear-gradient(#fdfdfd, #f132af);
}

.u-list-2col {
    margin-bottom: 2%;
    overflow: hidden;
}
</style>
