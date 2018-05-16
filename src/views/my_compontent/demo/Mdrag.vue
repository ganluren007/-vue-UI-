<template>
	<div>
	     <div class="drag" v-drag="dragObj"></div>
	     <!--<img src="" alt="" v-load="loadSrc" class="img"/>-->
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
			num:0,
			dragObj:{
				startFun:()=>{
					console.log("start")
				},
				moveFun:()=>{
					console.log(this.num++)
				},
				endFun:()=>{
					console.log("end")
				},
				xLimit:{min:20,max:200},
				yLimit:{min:100,max:100}
			},
			loadSrc:{'src':"http://img.ivsky.com/img/tupian/pre/201712/30/wuya-008.jpg"},
			
			
		}
	},
	components: {

	},
	methods: {
			
	},
	watch: {

	},
	mounted() {

	},
	computed: {

	}
}
</script>

<style scoped="scoped">
    .drag{
    	width:4rem;height: 4rem;background: red;position: absolute;
    }
    
    .img{
    	display: block;width:50px;height: 50px;background: red;margin-top: 5rem;
    }
</style>