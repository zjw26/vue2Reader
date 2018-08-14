$.get('/ajax/male',function(d){
    new Vue({
		el:'#app',
        data:{
            data:d,
        },
        methods:{
            toBook:function(id){
				location.href="/book?id="+id;
			}
        }
    })
})