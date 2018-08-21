<template>
<div class="book">
	<backbar :title="title"></backbar>
	<book-info @load-result="loadResult" :bookId="bookId"></book-info>
	<review :bookId="bookId"></review>
	<recommend :bookId="bookId"></recommend>
	<bookbar :bookId="bookId"></bookbar>
	<list-loading v-if="isShowPageLoading"></list-loading>
</div>
</template>

<script>
import backbar from '@/components/back-bar';
import bookInfo from '@/components/BookInfo';
import review from '@/components/Review';
import recommend from '@/components/Recommend';
import bookbar from '@/components/Bookbar';
import listLoading from '@/components/list-loading';

export default {
	name: 'book',
	components: {
		backbar,
		bookInfo,
		review,
		recommend,
		bookbar,
		listLoading
	},
	data() {
		return {
            bookId:this.$route.query.id,
            isShowPageLoading: true,
			title: '书籍详情'
		}
	},
    computed: {
    },
	created() {
        console.log(this.$route.query.id)
	},
	methods: {
		loadResult: function() {
			this.isShowPageLoading = false;
		}
	}
}
</script>

<style lang="scss">
.book {
    position: relative;
    overflow: hidden;
    margin: 40px 0 70px;
}
</style>
