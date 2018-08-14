var id = location.href.split('?id=').pop();
if(id.indexOf('http')==-1){
    $.get('/ajax/book?id=' + id,function(d){
        new Vue({
            el:'#app',
            data:d.recommend,
            methods:{
                toBook:function(id){
                    location.href="/book?id="+id;
                }
            }
        })
    })
}else{
    $.get('/api/recommendPage/node/books/all/5a9cfc6bf43ec14c2714a0a2',function(d){
        new Vue({
            el:'#app',
            data:{
                free:true,
                data:d.data
            },
            methods:{
                toBook:function(id){
                    location.href="/book?id="+id;
                }
            }
        })
    })
}
