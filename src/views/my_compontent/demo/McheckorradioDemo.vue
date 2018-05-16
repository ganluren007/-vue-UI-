<template>
	<div>
		<mcheckorradio title="房价" checkorradio="check" @selec="selec" :data="fjData" bs="fj">
			<div slot="items">
				<div class="cr-item" v-for="(item,index) in fjData"  id="cr-item" :index="index">
					<span class="dd" >{{item}}</span>
				</div>
			</div>
		</mcheckorradio>
		<div>------------------</div>
		<mcheckorradio title="面积" checkorradio="check" @selec="selec" :data="mjData" bs="mj">
			<div slot="items">
				<div class="cr-item" v-for="(item,index) in mjData"  id="cr-item" :index="index" >
					<span class="dd" >{{item}}</span>
				</div>
			</div>
		</mcheckorradio>
		<div>------------------</div>
		<mcheckorradio title="面积2" checkorradio="radio" @selec="selec" :data="mjData" bs="mj2">
			<div slot="items">
				<div class="cr-item" v-for="(item,index) in mjData"  id="cr-item" :index="index" >
					<span class="dd" >{{item}}</span>
				</div>
			</div>
		</mcheckorradio>
	</div>
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';
//import * as variables from "../../assets/js/common/variables.js";
import Mcheckorradio from '../component/Mcheckorradio.vue'
export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			title:"房价",
			fjData:["1000以下","1000-2000","2000-3000"],
			mjData:["50","100","150","200"],
			tjData:{fj:[],mj:[],mj2:[]}
		}
	},
	components: {
		Mcheckorradio
	},
	methods: {
			selec(jiu){
				Object.assign(this.tjData,jiu)
				console.log(JSON.stringify(this.tjData))
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
	.item-active{
		color:red
	}
	
</style>