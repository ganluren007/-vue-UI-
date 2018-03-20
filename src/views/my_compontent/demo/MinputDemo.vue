<template>
	<div id="wrap">
		<Minput v-model="myData" :validate="validate" :isCheck="isCheck" @on-blur="blur" @on-input="input" @on-change="change" >
			<p slot="left" class="left">用户名</p>
			<p slot="right" class="but">发送验证码</p>
		</Minput>
		<div>{{myData}}</div>
		<div><button @click="login">登录</button></div>
		
	</div>
	
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';

import Minput from "../component/Minput.vue"

export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			myData:"DFDF",
			validate:[{'rule':new RegExp('^[0-9]{6,}$'),'tip':'至少输入六位'},{'rule':/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/,'tip':'含有字母和数字'}],
			isCheck:0
		}
	},
	components: {
		Minput
	},
	methods: {
		login(){
			this.isCheck++;
		},
		blur(e,val){
			console.log(e)
			console.log(val)
		},
		change(e,val){
			console.log(e)
			console.log(val)
		},
		input(e,val){
			console.log(e)
			console.log(val)
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
	#wrap .ipt{
		text-indent: 4rem;
	}
	#wrap .ipt-wrap{
		position: relative;margin-top: 1rem;height: 3.75rem;
	}
	.left,.but{
		position: absolute;height: 2.5rem;line-height: 2.5rem;
	}
	.left{
		left:0.75rem;
	}
	.but{
		right:1rem;top:0rem
	}
</style>