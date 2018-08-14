// $.get('/ajax/rank',function(d){
// 	for(var i=0;i< d.items.length;i++){
// 		d.items[i].description = d.items[i].description.split('\n');
// 	}
// 	new Vue({
// 	  el: '#app',
// 	  data: d
// 	});
// },'json');

new Vue({
	el: '#app',
	data: {
		height:parseInt($(window).height())-49,
		ranking:{},
		rankItems:[
			{name:'最热榜',id:'54d42d92321052167dfb75e3'},
			{name:'好评榜',id:'5a6844aafc84c2b8efaa6b6e'},
			{name:'热搜榜',id:'5a6844f8fc84c2b8efaa8bc5'},
			{name:'潜力榜',id:'54d42e72d9de23382e6877fb'},
			{name:'留存榜',id:'564547c694f1c6a144ec979b'},
			{name:'完结榜',id:'564eb878efe5b8e745508fde'},
			{name:'VIP榜',id:'57eb86f0ef9e5a8f20543d7d'},
			{name:'圣诞榜',id:'582ed5fc93b7e855163e707d'},
			{name:'百度榜',id:'564ef4f985ed965d0280c9c2'},
			{name:'掌阅榜',id:'564d8003aca44f4f61850fcd'},
			{name:'书旗榜',id:'564d80457408cfcd63ae2dd0'},
			{name:'17K榜',id:'54d430e9a8cb149d07282496'},
			{name:'起点榜',id:'54d4306c321052167dfb75e4'},
			{name:'纵横榜',id:'54d430962c12d3740e4a3ed2'},
			{name:'和阅读榜',id:'54d4312d5f3c22ae137255a1'},
			{name:'逐浪榜',id:'5732aac02dbb268b5f037fc4'},
			],
		isShowPageLoading:true
	},
	methods:{
		changeRankContent:function(id){
			this.getRankingContent(id);
			this.rankItems.forEach((e,index)=>{
				if(e.id==id){
					$('.rank-list>.rank-item').removeClass('active');
					$('.rank-list>.rank-item').eq(index).addClass('active');
				}
			})
			$(".book-list-section").scrollTop(0)
		},
		getRankingContent:function(id='54d42d92321052167dfb75e3'){
			this.isShowPageLoading=true;
			var _this=this;
			$.get('ajax/rank?id='+id,function(d){
				_this.isShowPageLoading=false;
				d=JSON.parse(d);
				d.ranking.books.forEach(e=>{
					e.latelyFollower=e.latelyFollower>10000?parseInt(e.latelyFollower / 10000) + '万' :e.latelyFollower;
				})
				_this.ranking=d.ranking;
			})
			
		}
	},
	created:function(){
		$('.book-list-section').height($(window).height()-44)
		this.getRankingContent();
	}
});
setTimeout(function(){
	$('.rank-list>.rank-item').eq(0).addClass('active');
},200)