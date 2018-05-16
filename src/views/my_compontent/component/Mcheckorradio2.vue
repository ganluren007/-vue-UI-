<template>
	<div class="cr-wrap">
		<header class="cr-title">{{title}}</header>
		<div class="cr-content" @click='selec($event)'>
			<div class="cr-item" v-for="(item,index) in data" id="cr-item">
				<slot name="con"></slot>
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
			console.log($)
		},
		data() {
			return {
				title: this.title,
				data:this.data
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
				this.$emit("selec", this.seleContent);
			},

			selec(e) {
				var that = this;
				var target = e.target;
				if(target.id !== "cr-item") {
					target = target.parent("#cr-item")
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
					$(target).siblings().removeClass("item-active")
					target.className = "item-active";
					
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
			}
		}
	}
</script>

<style scoped="scoped">
	.tab-wrap {
		width: 100%
	}
</style>