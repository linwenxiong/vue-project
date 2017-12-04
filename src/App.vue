<template>
  <div class="wrap">
  	<div class="container">
  		<transition :name="transitionName">
   			<router-view></router-view>
   		</transition>
   		<transition name="fade">
    		<loding v-if="loading"></loding>
    	</transition>
  	</div>
  </div>
</template>
<script> 
require('./assets/css/reset.scss') 
require('./assets/css/lcss.scss')
require('./assets/css/com.scss')
import {mapGetters} from 'vuex'
import loding from './components/loding'
	export default{
		data(){
			return{
				transitionName:'leftSwiper'
			}
		},
		computed:mapGetters({
			loading:'loading'
		}),
		components:{
			loding
		}
	}
</script>