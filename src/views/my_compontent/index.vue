<template>
	<div>
		<ul>
			<li><router-link :to='{path:"/Minput"}'>Minput（input组件）</router-link></li>
			<li><router-link :to='{path:"/Mstar"}'>Mstar（评分组件）</router-link></li>
			<li><router-link :to='{path:"/Mhover"}'>Mhover(pc端  )</router-link></li>
			<li><router-link :to='{path:"/Mscroll"}'>Mscroll（滚动组件）</router-link></li>
			<li><router-link :to='{path:"/Mdrag"}'>Mdrag(拖拽  自定义指令)</router-link></li>
			<li><router-link :to='{path:"/McheckorradioDemo"}'>单多选</router-link></li>
			<li><router-link :to='{path:"/MprogressDemo"}'>可拖拽进度条</router-link></li>
			
		</ul>
		
		
		
		
		
		
		
	</div>
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';

export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			
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
	*{
		padding:0;margin:0;
	}
	ul{
		list-style: none;width:100%
	}
	li{
		height: 2rem;background: #ffffff;line-height: 2rem;text-align: center;
	}
</style>