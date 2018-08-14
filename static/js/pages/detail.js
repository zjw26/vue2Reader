var name = location.href.split('?name=')[1].split('&sex=')[0];
var sex = location.href.split('?name=')[1].split('&sex=')[1];
$.get("/api/book/by-categories?gender="+sex+"&type=hot&major="+name+"&minor=&start=0&limit=20",function(d){
    new Vue({
		el:'#app',
        data:d,
        methods:{
            toBook:function(id){
				location.href="/book?id="+id;
			}
        }
    })
})