<template>
	<div>
		<ul>
			<li><router-link :to='{path:"/Minput"}'>Minput</router-link></li>
			<li><router-link :to='{path:"/Mstar"}'>Mstar</router-link></li>
			<li><router-link :to='{path:"/Mhover"}'>Mhover(pc端)</router-link></li>
			<li><router-link :to='{path:"/Mscroll"}'>Mscroll</router-link></li>
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