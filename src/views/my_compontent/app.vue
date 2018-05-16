<template>
	<div class="page-group">
		<div class="page page-current">
			

			<keep-alive>
   				 <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
			

		</div>
	</div>

</template>

<script>
//	import * as variables from "../../assets/js/common/variables.js";
	
	
	export default {
		beforeCreate: function() {

		},
		created() {
			
		},
		data() {
			return {
				show1:true,
				show2:false
			}
		},
		components: {

		},
		//computed:  mapGetters(['allProductList']),
		computed: {
			

		},
		watch: {

		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>