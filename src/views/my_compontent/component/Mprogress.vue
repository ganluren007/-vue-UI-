<template>
	<div class="progress">
		<div class="progress-jdt" ref="jdt" @click="jd($event)"></div>
		<div class="progress-jdt-active" :style={width:width} ref="jdtactive" @click="jd($event)"></div>
		<div class="progress-tz" v-drag="dragObj" ref="progresstz"></div>
		<span ref="mybox">{{}}</span>
		
		
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	//import * as variables from "../../assets/js/common/variables.js";
	export default {
		beforeCreate: function() {

		},
		created() {
			this.$nextTick(function () {
                console.log(this.$refs.progresstz) // => '更新完成'
              })
			
			
		},
		data() {
			return {
				dragObj: {
					startFun: () => {
						console.log("start")
					},
					moveFun: (obj) => {
						var progresstz=this.$refs.progresstz;
						var jdt=this.$refs.jdt;
						this.width =(obj.left+ progresstz.offsetWidth/2) + "px";
						this.jdz=(obj.left/jdt.offsetWidth).toFixed(2)
						this.$emit("changeJd",{jdz:this.jdz,bs:this.bs})
					},
					endFun: () => {
						console.log("end")
					},

					xLimit: {
						min: 0,
						max: 0
					},
					yLimit: {
						min: -9.8,
						max: -9.8
					}
				},
				width: "0px",
				jdz:"",
				isShowJd:this.isShowJd
				
			}
		},
		components: {

		},
		methods: {
			
//			vue操作dom的时候得一些坑
			jd(e) {
				var tz = this.$refs.progresstz;
				var jdt=this.$refs.jdt;
				var oLeft = e.clientX - tz.offsetWidth / 2;
				var oTop = e.clientY - tz.offsetHeight / 2;
				if(this.dragObj.xLimit) {
					if(oLeft < this.dragObj.xLimit.min) {
						oLeft = this.dragObj.xLimit.min;
					} else if(oLeft > this.dragObj.xLimit.max) {
						oLeft = this.dragObj.xLimit.max;
					}
				}

				if(this.dragObj.yLimit) {
					if(oTop < this.dragObj.yLimit.min) {
						oTop = this.dragObj.yLimit.min;
					} else if(oTop > this.dragObj.yLimit.max) {
						oTop = this.dragObj.yLimit.max;
					}
				}

				tz.style.left = oLeft + "px";
				tz.style.top = oTop + "px";
				
				this.width =(oLeft+ tz.offsetWidth/2) + "px"
				this.$emit("changeJd",{jdz:oLeft/jdt.offsetWidth,bs:this.bs})
			}
		},
		watch: {

		},
		mounted() {
			//		this.$refs.jdt不能使用原生的dom  api
			
			var jdt = this.$refs.jdt;
			var tz = this.$refs.progresstz;
			var jdtactive = this.$refs.jdtactive;
			
			jdtactive.style.height=jdt.offsetHeight+"px"
			this.dragObj.xLimit.eleObj = jdt;
			this.dragObj.xLimit.max = jdt.offsetWidth;
			this.dragObj.yLimit.min = (tz.offsetTop+jdt.offsetTop) /2;
			this.dragObj.yLimit.max = (tz.offsetTop+jdt.offsetTop) /2;
			

			jdt.addEventListener("click", function(e) {
					console.log("dfdf")
			}.bind(this))
		},
		computed: {

		},
		props:['isShowJd','bs']
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.progress {
		position: relative;
	}
	
	.progress-jdt {
		width: 16rem;
		height: 0.25rem;
		border-radius: 0.12rem;
		background: #ffffff;
		z-index: 10
	}
	
	.progress-jdt-active {
		
		border-radius: 0.12rem;
		background: blue;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		border-radius-bottomright: 0;
		border-radius-topright: 0;
	}
	
	.progress-tz {
		width: 0.75rem;
		height: 0.75rem;
		background: red;
		border-radius: 50%;
		position: absolute;
		top: -0.245rem;
		left: -0.245rem;
		z-index: 102
	}
</style>