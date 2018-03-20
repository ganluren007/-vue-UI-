<template>
	<div id="wrap">
		<scroller @on-scroll-bottom="addContent" :isCf='isCf' :scrollBottomOffset="offset" @on-scroll="scroll">
			<div slot='content' class="cont">
				<div v-for='item in num' class="item">{{item}}</div>
			</div>
			<div v-show="isTip" class="tip" slot='tipText'>
				{{tipText}}
			</div>
		</scroller>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	//import * as variables from "../../assets/js/common/variables.js";
	import scroller from '../component/Mscroll.vue'
	export default {
		beforeCreate: function() {

		},
		created() {

		},
		data() {
			return {
				num: 20,
				isCf: true,
				offset: 40,
				tipText: '加载中...',
				isTip: false
			}
		},
		components: {
			scroller
		},
		methods: {
			addContent() {
				var that = this;
				this.isTip = true;
				if(that.num >40) {
					that.tipText = '没有更多数据了'
				} else {
					setTimeout(function() {
						that.num = that.num + 10
						that.isCf = true;
					}, 1000)
				}

			},
			scroll(position){
				console.log(position)
			}
		},
		watch: {

		},
		mounted() {

		},
		computed: {

		}
	}
</script>

<style>
	#wrap .main {
		width: 100%;
		height: 20.5rem;
		background: #ffffff;
		overflow: scroll;
		position: absolute;
	}
	
	#wrap .cont {
		width: 100%;
	}
	
	#wrap .cont .item {
		height: 2rem;
		text-align: center;
	}
	
	#wrap .tip {
		text-align: center;
	}
</style>