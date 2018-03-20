<template>
	<div>
		<hover :hoverItemNum="num" dir='horizontal'  @on-hover='showcontent' nodeName='div'>
			
				<div  class="con" slot="hover-content" v-for="(item,index) in hoverContent"  id='opp':index="index">{{item}}</div>		    
		    	<div slot="show-content" class="show-content" >{{showContent[index]}}</div>
		</hover>
		
		
		<div id='vertical'>
			<hover :hoverItemNum="num" dir='vertical'  @on-hover='showcontent' nodeName='div' class='wrap2'>			
				<div  class="con2" slot="hover-content" v-for="(item,index) in hoverContent"  id='opp':index="index">{{item}}</div>		    
		    	<div slot="show-content" class="show-content" >{{showContent[index]}}</div>
		</hover>
		</div>
		
		
		
	</div>
</template>

<script>
	
import { mapGetters, mapActions } from 'vuex';
//import * as variables from "../../assets/js/common/variables.js";
import hover from '../component/Mhover.vue'
export default {
	beforeCreate: function() {

	},
	created() {
		
	},
	data() {
		return {
			num:3,
			hoverContent:[1,2,3,4,5],
			showContent:['one','two','three','four','five'],
			index:0
		}
	},
	components: {
		hover
	},
	methods: {
		showcontent:function(index){
			this.index=index;
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
	
	.show-content{
		width:100px;height: 100px;border:1px solid red;background: white;
	}
	.hover-item {
		background: #ffffff;height: 50px;
	}
	.item-wrap{
		margin-left: 20px;
	}
	.con{
		display: inline-block;width:80px;text-align: center;cursor: pointer;
	}
	.con2{
		width:80px;
	}
	.wrap2{
		margin-top: 200px;
	}
	#vertical{
		width:80px;
	}
	#vertical .hover-item{
		height: auto;width:80px;
	}
	.hui{
		width:auto;
	}
</style>