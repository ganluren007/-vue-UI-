<template>
	
		<div class="wrap">
			<div class="wrap-item">
				<span class="jdz">{{jd.jd1}}</span>
			     <mprogress @changeJd="getJd" :isShowJd="isShowJd1" bs="jd1"></mprogress>
			</div>
		    
		    <div class="wrap-item">
		    	<span class="jdz">{{jd.jd2}}</span>
			     <mprogress bs="jd2" @changeJd="getJd"></mprogress>
			</div>
			
			<div class="wrap-item">
				<span class="jdz">{{jd.jd3}}</span>
			     <mprogress bs="jd3" @changeJd="getJd"></mprogress>
			</div>
		   
		    <div class="wrap-item wrap-item4">
		    	<span class="jdz">{{jd.jd4}}</span>
			     <mprogress bs="jd4" @changeJd="getJd"></mprogress>
			</div>
		</div>
	    	
	
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';
//import * as variables from "../../assets/js/common/variables.js";

import Mprogress from '../component/Mprogress.vue'

export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			isShowJd1:true,
			jd:{jd1:0,jd2:0,jd3:0,jd4:0}
			
		}
	},
	components: {
			Mprogress
	},
	methods: {
			getJd(Jd){
				var obj={};
				obj[Jd.bs]=Jd.jdz
				Object.assign(this.jd,obj)
				console.log(Jd.jdz)
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

<style scoped>
	*{
		margin:0;padding:0;
	}
	.wrap{
		position: relative;height: auto;left:30px;top:50px;
	}
    .wrap-item{
    	margin-top: 40px;
    }
    
    
</style>


<style type="text/css">
	.wrap-item4 .progress-jdt{
		width:10rem;height: 0.1rem;
	}
</style>
