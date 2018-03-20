<template>
	
		<div class="img-con">
			<magnify src="../img/img-small.jpg" bigsrc="../img/img-big.jpg" width="450" height="250" :configs="configs"></magnify>
		</div>
	
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	
	import magnify from "../component/magnify.vue"
	export default {
		beforeCreate: function() {

		},
		created() {

		},
		data() {
			return {
				configs: {
					width: 650,
					height: 350,
					maskWidth: 100,
					maskHeight: 100,
					maskColor: 'red',
					maskOpacity: 0.2
				}
			}
		},
		components: {
			magnify
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
	.img-con {
		border: 1px solid #ccc;
		text-align: center;
		padding: 0;
	}
</style>