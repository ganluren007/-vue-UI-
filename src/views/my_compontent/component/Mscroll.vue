<template>
	<div>
		<div class="main" @scroll="scroll($event)" >
			
				<slot name="content" class='jiu'></slot>
				<slot name='tipText'></slot>
				
			
		</div>
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
			isCf:this.isCf
			
		}
	},
	components: {

	},
	methods: {
		scroll:function(e){
			
			var mainEle=e.currentTarget;
			var scrollTop=mainEle.scrollTop;
			this.$emit('on-scroll',{left:mainEle.scrollLeft,top:Number(scrollTop.toFixed(2))})
//			console.log("dfdfdf")
//			console.log(mainEle.children[0].offsetHeight)
			
			if(scrollTop>mainEle.children[0].offsetHeight-mainEle.offsetHeight-this.scrollBottomOffset){
				if(this.isCf){
					this.isCf=false;
					this.$emit('on-scroll-bottom')
					console.log("dfdfdf")
				}
				
			}
		}
	},
	watch: {

	},
	mounted() {
		
	},
	computed: {

	},
	props:{
		isCf:{
			type:Boolean
		},
		scrollBottomOffset:{
			type:Number
		}
		
	}
}
</script>

<style scoped="scoped">
	.tip{
		height: 2rem;text-align: center;
	}
</style>