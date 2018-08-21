<template>
<section class="book-bar">
	<div class="book-bar-item"  @click="addToShelf()">
		<div class="book-bar-icon">
			<svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiarushujia"></use>
                </svg>
		</div>
		<p class="book-bar-content" >{{isAdded == true?'已加入书架':'加入书架'}}</p>
	</div>
	<div class="book-bar-item read">
		<router-link :to="{ name: 'read', params: { id: curBook }}">                                                                                                 
			<p class="book-bar-content">立即阅读</p>
		</router-link>
	</div>
</section>
</template>

<script>

export default {
	name: 'bookbar',
	props:{
        bookId:String,
        
    },
	data() {
		return {
			isAdded: false,
            curBook:this.bookId,
		}
	},
	computed: {
	},
	created() {
		var shelf=JSON.parse(localStorage.getItem('shelf'))?JSON.parse(localStorage.getItem('shelf')):[];
		shelf.forEach(item=>{
            if(item.bookId == this.bookId){
                this.isAdded = true;
                return;
            }
		})
	},
	methods: {
		addToShelf: function() {
            this.isAdded = true;
            console.log(this.isAdded)
            if(localStorage.getItem('shelf')!==null){
                var shelf=JSON.parse(localStorage.getItem('shelf'));
                shelf[shelf.length]={bookId:this.bookId,chapterIndex:0}
                localStorage.setItem('shelf',JSON.stringify(shelf));
            }else{
                localStorage.setItem('shelf',JSON.stringify([{bookId:this.bookId,chapterIndex:0}]))
            }
		}
	}
}
</script>

<style lang="scss">
.book-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    display: flex;
    height: 60px;
    background-color: #fff;

    .book-bar-item {
        display: block;
        flex: 1;
        padding: 10px 0;
        font-size: 12px;
        color: #999;
        border-top: 1px solid rgba(0, 0, 0, .1);

        &.read {
            font-size: 16px;
            color: #fff;
            background: #ed424b;
            line-height: 40px;
            border-top-color: #ed424b;
        }
    }

    .book-bar-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 4px;

        .icon {
            width: 24px;
            height: 24px;
        }
    }
    .book-bar-content {
        text-align: center;
    }
}
</style>
