<template>
	<div>
		<div class="tab-wrap">
			<div class="item">
				<slot name='content'></slot>
			</div>
			
		</div> 
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
	.tab-wrap{
		width:100%
	}
</style>