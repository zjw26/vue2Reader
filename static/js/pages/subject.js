$('.top__title').html('精彩专题');

$.get('/ajax/subject',function(d){
    d=JSON.parse(d);
    new Vue({
		el:'#app',
        data:{
            items:d.items,
            start:0,
            isNotShowPageLoading:true
        },
        methods:{
            toBanner:function(id){
				location.href="/banner?id="+id;
            },
            moreBanner:function(){
                console.log(this.start)
                this.start=this.start+4;
                var _this=this;
                $.get('/ajax/subject?start='+this.start,function(data){
                    let items=data.items;
                    _this.items=_this.items.concat(items);
                },'json')
            }
        },
        // mounted:function(){
        //     console.log('mounted');
        //     this.start=this.start+4;
        //     var _this=this;
        //     console.log(this.start)
        //     $('.subject-list').dropload({
        //         scrollArea : window,
        //         distance:200,
        //         loadDownFn : function(me){
        //             console.log(me)
        //             // me.resetload();
        //             $.ajax({
        //                 type: 'GET',
        //                 url: '/ajax/subject?start='+_this.start,
        //                 dataType: 'json',
        //                 success: function(data){
        //                     // 每次数据加载完，必须重置
        //                     let items=data.items;
        //                     _this.items=_this.items.concat(items);
        //                     // setTimeout(function(){ 
        //                     //     // 每次数据加载完，必须重置 
        //                     //         me.resetload(); 
        //                     // },1000); 
        //                 },
        //                 error: function(xhr, type){
        //                     // me.resetload();
        //                 }
        //             });
        //         },
        //         domDown : {
        //             //上拉加载时的提示文字
        //              domClass   : 'dropload-down',
        //              domRefresh : '<div class="dropload-refresh">上拉加载更多</div>',
        //              domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
        //              domNoData  : '<div class="dropload-noData">暂无数据</div>'
        //          },
        //     });
        // }
    })
})

