<template>
    <div class="home">
      <swiper :options="swiperOption" ref="mySwiper" class="banner_box">
         <swiper-slide v-for="item in bannerDate">
         	<router-link :to="{name:'detail',params:{id:item.ad_id}}" ><img class="banner-img" width="100%" :src="'http://www.lamezhi.com/'+item.ad_logo" :alt="item.ad_name"></router-link>
         </swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div class="tagline"><span><i style="margin-left: 0;" class="icon_yg"></i>品牌制造商直供</span><span><i class="icon_yg"></i>邮费3.5元起</span><span style="margin-right:0"><i class="icon_yg"></i>贴心售后保障</span></div>
      <div class="notice-box">
	       <div class="img-box"><img src="../assets/img/Artboard.png" alt=""></div>
	       <div class="text-box">
	          <div class="slidebox" id="slidebox">
	          	<swiper :options="{autoplay: 3000, direction: 'vertical',loop : true,height:33}" ref="Swiper">
				   <swiper-slide v-for="item in articleDate" class="MswiperSlide">{{item.title}}</swiper-slide>
				</swiper>
	         </div>
	       </div>
    	</div>
<!--     	<section id="free_goods " class="ZMSP_1">
			    <div class="ZMSP_Title">限时特惠</div>
			      <div class="banbox" v-for="item in actPic"><img :src="'http://www.lamezhi.com/'+item.ad_logo" :alt="item.ad_name"></div>
		</section> -->
			<product :parentData='commend'></product>
			<recomm :parentData='HotRecommend'></recomm>
			<productlist :parentData='CategoryRecommend'></productlist>
			
      <food></food> 
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '../assets/css/swiper-3.4.2.min.css'
import product from '../components/product'
import recomm from '../components/recomm'
import productlist from '../components/product_list'
import food from '../components/fooder'
export default{
 	name:'home',
 	data(){
 		return{
 			swiperOption: {
	         autoplay: 3000,
	         pagination :'.swiper-pagination',
	         loop : true
	       }
 		}
 	},
 	methods:{
 		// ...mapActions([''])
 	},
 	computed:mapGetters([
 		'currentThreadID',
 		'bannerDate',
 		'articleDate',
 		'actPic',
 		'commend',
 		'HotRecommend',
 		'CategoryRecommend'
 	]),
 	components:{
 		swiper,
 		swiperSlide,
 		product,
 		recomm,
 		productlist,
 		food
 	},
 	created(){
 		window.addEventListener('touchstart',function(){},false);
 		this.$store.dispatch("getHomeDate");
 		this.$store.dispatch("getRecommendDatas");
 	}
 }
</script>
