var id = location.href.split('?id=').pop();
$.get('/ajax/book?id=' + id,function(d){
	d.reviewsNum=5;
	d.notShowPageLoading=true;
	new Vue({
		el:'#app',
		data:d,
		computed: {
			cover() {
				return "http://statics.zhuishushenqi.com" + this.data.cover;
			},
			wordCount() {
				return this.data.wordCount > 10000 ? parseInt(this.data.wordCount / 10000) + '万' : this.data.wordCount;
			},
			serializeWordCount() {
				return this.data.serializeWordCount < 0 ? 0 : this.data.serializeWordCount;
			}
		},
		filters: {
			cover(cover){
				return "http://statics.zhuishushenqi.com" + cover;
			},
			setAvatar(avatar) {
				return "http://statics.zhuishushenqi.com" + avatar;
			},
			time(time){
				return time.split('T')[0];
			}
		},
		methods:{
			back:function(){
				if(document.referrer.indexOf('reader')>-1){
					history.go(-3);
				}else{
					history.back();
				}
			},
			readBook:function(){
				location.href = "/reader"
			},
			menu:function(id){
				location.href="/menu?id="+id;
			},
			readNow:function(){
				this.notShowPageLoading=false;
				setTimeout(function(){
					this.notShowPageLoading=false;
				},3000)
				var id = location.href.split('?id=').pop();
				$.get('/ajax/chapter?id=' + id,function(d){
					var bookId=d.book;
					var chapterId=d.chapters[0].id;
					location.href = "/reader?id="+chapterId+"&book="+bookId+"&index="+0;
				},'json');
			},
			toBook:function(id){
				location.href="/book?id="+id;
			},
			more:function(){
				location.href="/more?id="+id;
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
				$.get('ajax/moreReviews?id='+id+'&num='+this.reviewsNum,function(d){
					d=JSON.parse(d);
					_this.reviews=d;
					let contents=$('p.text-line-comm');
					for(let i=0;i<contents.length;i++){
							let txt=contents[i].innerHTML;
							txt=txt.replace(/\n+/g,'<br><br>');
							contents[i].innerHTML=txt;
					}
				})
			},
		},
	});

	let contents=$('p.text-line-comm');
	for(let i=0;i<contents.length;i++){
			let txt=contents[i].innerHTML;
			txt=txt.replace(/\n+/g,'<br><br>');
			contents[i].innerHTML=txt;
	}
},'json');

