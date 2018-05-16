<template>
	<div class="cr-wrap">
		<header class="cr-title">{{title}}</header>
		<div class="cr-content" @click='selec($event)'>
			<slot name="items"></slot>	
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		beforeCreate: function() {

		},
		created() {
			console.log($)
		},
		data() {
			return {
				title: this.title,
				seleIndex: [],
				seleContent: []
			}
		},
		components: {

		},
		methods: {
			tq(target) {
				var that=this;
				this.seleContent = [];
				this.seleIndex.forEach(function(item) {

					that.seleContent.push(that.data[item])
				})
				var obj={};
				obj[this.bs]=this.seleContent
				this.$emit("selec", obj);
			},

			selec(e) {
				var that = this;
				var target = e.target;
				
				if(target.id !== "cr-item") {
					target = $(target).parent("#cr-item")[0]
				}

				if(this.checkorradio === "check") {
					if(target.className === "item-active") {
						target.className = "";
						this.seleIndex.splice(this.seleIndex.indexOf(target.getAttribute("index")),1 )
		     			this.tq(target)
					} else {
						target.className = "item-active";
						this.seleIndex.push(target.getAttribute("index"))
		     			this.tq(target)
						
					}

				} else {
					$(target).siblings().removeClass("item-active");
					target.className = "item-active";
					this.seleIndex=[];
					this.seleIndex.push(target.getAttribute("index"));
					this.tq(target);
				}

			}
		},
		watch: {

		},
		mounted() {

		},
		computed: {

		},
		props: {
			title: {
				type: String
			},
			checkorradio: {
				type: String
			},
			data: {
				type: Array
			},
			bs:{
				type: String
				
			}
		}
	}
</script>

<style scoped="scoped">
	.tab-wrap {
		width: 100%
	}
</style>