<template>
	<div class="rank">
		<back-bar :title="'排行榜'"></back-bar>
		<template>
			<section class="rank-bar-section">
				<ul class="rank-list">
					<li v-for="rank in maleRankList"
						:class="['rank-item', 'fl', {active: rank._id === rankId}]"
						@click="changeRankId(rank._id)"
						:key="rank._id">
						{{ rank.shortTitle }}
					</li>
				</ul>
			</section>
		</template>
		<section class="book-list-section">
			<index-list :listData="bookList" :index="'1'" ></index-list>
			<div class="no-more" v-if="!isLoading">没有更多了</div>
		</section>

        <list-loading v-if="isShowPageLoading" style="left:40px;top:40px;"></list-loading>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '../fetch/api';
import indexList from '@/components/index-list';
import listLoading from '@/components/List-loading';
import backBar from '@/components/back-bar';


export default {
	name: 'rank',
	components: {
		indexList,
		listLoading,
		backBar,
		listLoading
	},
	data() {
		return {
			sex: 'male',
			maleRankList: [],
			femaleRankList: [],
			rankId: '',
			bookList: [],
	        isShowPageLoading: true,
			isLoading: true
		};
	},
	watch: {
		// '$route': 'fetchData',
		rankId: function () {
			this.isLoading = true;
			this.bookList = [];
			api.getRankBooks(this.rankId)
				.then(data => {
					this.bookList = data.ranking.books;
					
					this.isLoading = false;
				})
		}
	},
	created() {
		this.fetchData();
		api.getRankBooks('54d42d92321052167dfb75e3')
				.then(data => {
					this.bookList = data.ranking.books;
					
					this.isLoading = false;
				})
	},
	methods: {
		fetchData: function () {
			api.getRanks()
				.then(data => {
					this.maleRankList = data.male;
					this.femaleRankList = data.female;
					this.rankId = this.maleRankList[0]._id;
					this.isShowPageLoading = false;
				})
		},
		changeRankId: function(rankId) {
			this.rankId = rankId;
		}
	}
}
</script>

<style lang="scss">
.rank {
	position: relative;
	height: 100%;
	background: #fff;
	overflow-y: scroll;

	.rank-bar-section {
		width: 80px;
		position: fixed;
		top: 40px;
		left: 0;
		bottom: 60px;
		background-color: #f6f7f9;
		overflow-y: scroll;
		.rank-list {
			width: 100%;
			overflow: hidden;
		}
		.rank-item {
			display: block;
			width: 100%;

			height: 36px;
			line-height: 36px;
			text-align: center;
			border-left: 2px solid #f6f7f9;
			box-sizing: border-box;

			&.active {
				background-color: #fff;
				border-left: 2px solid #ed424b;
			}
		}
	}

	.book-list-section {
		position: relative;
		margin: 40px 0 60px 80px;
		background-color: #fff;
	}
}
</style>
