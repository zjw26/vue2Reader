
<template>
    <div class="search">
        <back-bar :title="'搜索'"></back-bar>
        <div class="top">
            <div id="search-input" class="search-input"> <b class="search-input__mi"></b>
                <input type="text" value="" id="search_box" placeholder="输入书名/作者/关键字">
                <div class="search-input__btn" @click="doSearch()" >搜索</div>
            </div>
        </div>
        <div class="top__bd" v-show="condition" id="tagList">
            <div>
                <ul class="m-tag -color search-tag">
                    <li class="u-tag" v-for="item in hotKeywords" @click="searchTag(item.word)">{{item.word}}</li>
                </ul>
            </div>
        </div>
        <div class="top__bd" v-show="!condition">
            <list-loading v-if="isShowPageLoading" style="left:40px;top:40px;"></list-loading>
            <index-list :listData="searchList" :padding = "'padding: 0 13px 60px;'" ></index-list>
            <div class="ListView ListView_complete" v-show="empty">
                <div class="ListView__empty">
                    <p class="u-tip">没有相应的搜索结果</p>
                </div>
                <div class="ListView__complete"></div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../fetch/api';
import indexList from '@/components/index-list';
import listLoading from '@/components/List-loading';
import backBar from '@/components/back-bar';

export default {
  name: 'search',
  components:{
    indexList,
	listLoading,
	backBar,
  },
  data(){
      return {
        condition:true,
		empty:false,
        tags:[],
        hotKeywords:[],
        searchList:[],
        isShowPageLoading:true
      }
  },
  methods:{
     doSearch: function(e) {
			var keyword = $('#search_box').val();	
            var _this = this;
            api.searchByKeyword(keyword).then(data=>{
                _this.isShowPageLoading = false;
                _this.condition = false;
                _this.searchList = data;
                console.log(_this.searchList,data)
				if(_this.searchList.length == 0){
					_this.empty = true;
				}else{
					_this.empty = false;
				}
            })
        },
		searchTag:function(tag){
			$('.search-input input').val(tag)
		}
  },
  mounted:function(){
      api.getSearchHotKeywords().then(data=>{
          this.hotKeywords = data.slice(0,10);
      })
  }
}
</script>

<style>
.search {
    position: relative;
    height: 100%;
}

.search .top {
    position: absolute;
    top: 42px;
    left: 0;
    right: 0;
}
.top {
    position: relative;
    height: 44px;
    border-bottom: 1px solid #ddd;
    font: 15px/45px a;
    color: #e7e3de;
    background-color: #850f0f;
    text-align: center;
}

.search-input {
    position: relative;
    margin: 5px 20px 5px 20px;
    height: 35px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
}

.search-input .search-input__mi {
    background: url(http://image.read.duokan.com/mfsv2/download/s010/p01TjruXIhgt/PP13pEqhpChuay.png) no-repeat center;
    background-size: 16px 16px;
}
.search-input b {
    position: absolute;
    left: 0;
    top: 0;
    width: 36px;
    height: 35px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    background-size: 35px 35px;
}

.search-input input {
    border: none;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 100%;
    padding: 8px 52px 8px 42px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    background: #fff;
}

.search-input__btn {
    display: block;
    line-height: 36px;
    position: absolute;
    right: 0;
    top: 0;
    border-left: 1px solid #ddd;
    padding: 0 8px;
    font-size: 14px;
    color: #666;
}

.top__bd {
    position: absolute;
    top: 87px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
}

.search-tag {
    padding: 17px;
}
.m-tag {
    line-height: 1;
    overflow: hidden;
}

.m-tag.-color .u-tag:nth-child(3n+1) {
    background-color: #fbebe8;
}
.search-tag .u-tag {
    background: #fff;
    margin-bottom: 10px;
}
.m-tag .u-tag {
    display: inline-block;
    width: auto;
    line-height: 1.8em;
    padding: 0 20px;
    color: #766d5d;
    border-radius: 4px;
    background: #909da8;
    font-size: 14px;
    text-align: center;
    border: 1px solid #d3d3d3;
}
.m-tag .u-tag {
    margin: 0 10px 5px 0;
}

.m-tag.-color .u-tag:nth-child(3n+1) {
    background-color: #fbebe8;
}

.m-tag.-color .u-tag:nth-child(3n+2) {
    background-color: #fcedda;
}

.m-tag.-color .u-tag:nth-child(3n+3) {
    background-color: #e8f9db;
}
</style>
