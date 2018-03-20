<template>
	<div id="">
		<div class="hover-wrap" @mouseout="isShow=false">
			<div class="hover-item">
				<div @mouseover="hoverItem($event)" class="hui">
					<slot name='hover-content' :class="{'horizontal':dir==='horizontal','item-wrap':true}" >{{item}}</slot>					
				</div>				
			</div>
			<div class="show-item" v-if="isShow" :style="{'left':offsetLeft+'px','top':offsetTop+'px'}" @mouseover="isShow=true">
			   <slot name='show-content'></slot>
			</div>
		</div>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
//	import * as variables from "../../assets/js/common/variables.js";
	export default {
		beforeCreate: function() {

		},
		created() {
			console.log(this.hoverItemNum)
			console.log(typeof this.hoverItemNum)
			
		},
		data() {
			return {
				isShow:false,
				offsetLeft:0,
				offsetTop:0,
				dir:this.dir,
				nodeName:this.nodeName
			}
		},
		components: {

		},
		methods: {
			hoverItem(e){				
				if(e.target.nodeName.toLowerCase()===this.nodeName){
					var target=e.target
					var index=target.getAttribute('index');
					this.isShow=true;					
					if(this.dir==='horizontal'){
						this.offsetLeft=target.offsetLeft;
						this.offsetTop=e.target.offsetParent.offsetHeight;
					}else{						
						this.offsetLeft=e.target.offsetParent.offsetWidth;
						this.offsetTop=target.offsetTop
					}
					
					this.$emit("on-hover",index)
				}
			}
		},
		watch: {

		},
		mounted() {

		},
		computed: {

		},
		props:['dir','nodeName']
	}
</script>

<style>
     .vertical{
     	
     }
     .horizontal{
     	float:left;
     }
     .show-item{
     	position: absolute;
     }
     .hui{
     	position: relative;
     }
     .hover-wrap{
     	position: relative;
     }
</style>