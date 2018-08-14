var id = location.href.split('?id=').pop();

console.log(id)
$.get('/ajax/banner?id='+id,function(d){
    
    d=JSON.parse(d);
    $('.top__title').html(d.label);
    new Vue({
		el:'#app',
        data:{
            data:d,
        },
        methods:{
            toBook:function(keyword){
				$.get('/ajax/search',{
                    keyword:keyword
                },function(d){
                    var id=d.books[0]._id;
                    location.href="/book?id="+id;
                },'json');
			}
        }
    })
})