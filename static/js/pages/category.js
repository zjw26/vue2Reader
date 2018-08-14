$.get('/ajax/category',function(d){
	// d.male.forEach(e=>{
	// 	e.id="/api/book/by-categories?gender=female&type=hot&major="+e.name+"&minor=&start=0&limit=20"
	// })
	// d.female.forEach(e=>{
	// 	e.id="/api/book/by-categories?gender=female&type=hot&major="+e.name+"&minor=&start=0&limit=20"
	// })
	console.log(d)
	new Vue({
	  el: '#app',
		data: d,
		computed:{
			isShowPageLoading(){
					if(d){
							return false;
					}else{
							return true;
					}
			}
		},
		methods:{
			toDetail:function(name,sex){
				location.href="/detail?name="+name+"&sex="+sex;
			}
		}
	});
},'json');

$('.back-bar h2').html('分类')