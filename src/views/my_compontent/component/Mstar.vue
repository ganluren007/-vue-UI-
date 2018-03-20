<template>
	<div class="Mstar">
		<img v-for="(item,index) in 5" :index='index' @click="grade($event)" :src="index<=activeIndex?imgUrl[0]:imgUrl[1]" class="pf-img">{{item}}</span>
	</div>
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';
//import * as variables from "../../assets/js/common/variables.js";
export default {
	beforeCreate: function() {
			
	},
	created() {

	},
	data() {
		return {
			activeIndex:this.activeNum-1
		}
	},
	components: {

	},
	methods: {
		grade(e){
		    this.activeIndex=e.currentTarget.getAttribute("index")
		    console.log(this.activeIndex)
		}	
	},
	watch: {

	},
	mounted() {

	},
	computed: {
		
	},
	props:{
		imgUrl:{
			type:[Array]
		},
		activeNum:{
			type:[Number],
			default: 0
		}
	}
}
</script>

<style scoped="scoped">
	.pf-img{
		width:3.25rem;height:3.25rem;margin:0.25rem 0 0 0.25rem;border-radius: 50%;
	}
</style>

//		http://img.mp.itc.cn/upload/20170724/de4e9d68f3064d9bb8cd8c52d24366d4.jpg  xiao
//http://img4.imgtn.bdimg.com/it/u=2152881049,551924613&fm=27&gp=0.jpg  ku