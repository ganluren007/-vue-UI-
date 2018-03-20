<template>
	<div class="Minput">
		<div class="ipt-wrap">
			<slot name="left"></slot>
			<input type="" name="" class="ipt" v-model="currentVal" :type="type" @focus="focus" @blur="blur" @input="input" @change="change"/>
			<slot name="right"></slot>
		
			<p class="warn-tip">{{tipText}}</p>
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
			this.currentVal = this.value;
			
		},
		data() {
			return {
				"currentVal": "",
				"tipText": ""
			}
		},
		components: {

		},
		methods: {
//			验证功能
			check() {
				if(!this.validate) return
				var that = this;
				for(var i = 0; i < this.validate.length; i++) {
					var item=this.validate[i]
					if(typeof item.rule === "string") {
						if(item.rule === "email") {
							if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(that.currentVal)) {
								that.tipText = item.tip;
								return;
							}
						}
						if(item.rule === "phone") {
							if(!/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(that.currentVal)) {
								that.tipText = item.tip;
								return;
							}
						}
					} else {
						if(!(item.rule.test(that.currentVal))) {
							that.tipText = item.tip;
							return;
						}
					}
				}
				
			},
			focus() {
				this.tipText = ""
			},
			blur(event){
				this.$emit("on-blur",event,this.currentVal)
			},
			input(event){
				this.$emit("on-change",event,this.currentVal)
			},
			change(event){
				this.$emit("on-change",event,this.currentVal)
			}
		},
		watch: {
			value(newVal) {
				this.currentVal = newVal
			},
			currentVal(newVal) {
				this.$emit("input", newVal)
			},
			isCheck(){
            	this.check();
            }
		},
		mounted() {
			
		},
		computed: {
            
		},
		props: {
			value: {
				type: String
			},
			type: {
				type: String,
				default: "text"
			},
			validate: {
				type: [Array]
			},
			isCheck:{
				type: Number
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin:0;padding:0;
	}
	.ipt {
		width: 100%;
		height: 2.5rem;
		outline: none;
		border: none;
		border-radius: 1.25rem;
		text-indent: 2rem;
	}
	
	.ipt:focus {
		box-shadow: 1px 1px 3px blue;
	}
	.warn-tip{
		text-indent: 1rem;
	}
</style>