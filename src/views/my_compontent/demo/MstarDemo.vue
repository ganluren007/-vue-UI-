<template>
	<div>
		<Mstar :imgUrl='imgUrl' activeNum="3"></Mstar>
	</div>
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';
import Mstar from "../component/Mstar.vue"

export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			imgUrl:["http://img.mp.itc.cn/upload/20170724/de4e9d68f3064d9bb8cd8c52d24366d4.jpg","http://img4.imgtn.bdimg.com/it/u=2152881049,551924613&fm=27&gp=0.jpg"]
		}
	},
	components: {
			Mstar
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

<style>
</style>