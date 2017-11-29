<template>
  <div class="detail">
    <section class="productDetail" ref="detailBox">
	 		<div class="content">
				<swiper :options="{pagination :'.swiper-pagination',loop : true}" ref="mySwiper">
			      <swiper-slide v-for="images in detailsDate.images"><img width="100%" :src="testRes+images.image_url"></swiper-slide>
			      <div class="swiper-pagination"  slot="pagination"></div>
			  </swiper>
			  <div class="detail_tit">
	    	  <h3 class="detail_title">{{detailsDate.goods_name}}</h3>
	    	  <p class="good_title">{{detailsDate.goods_name}}</p>
	    	  <p class="lad_padlr">
	    		  <strong class="goods_price" >¥{{detailsDate.price}}</strong>
	    		  <span class="market_price" >¥{{detailsDate.market_price|formatMoney}}</span>
	        </p>
	    	</div>
	    	<section class="lad_tsbox">
			    <aside class="lad_gcb">工厂成本 ¥<em id="cost" style="font-style: normal;">{{detailsDate.price|formatMoney}}</em></aside>
			    <p class="detail-p">详细的成本清单（原料、工艺等成本细节）公开展示</p>
			    <p class="detail-p">商品价格=工厂成本x（1+10%）该价格，承诺低于所有同行</p>
				<div class="detail_sales" @click="showSpec">选择：<span v-for="spec in detailsDate.spec_names"> {{spec.name}} / </span> <i class="l_arrow"></i></div>
			</section>

			<div class="tagline"><span><i style="margin-left: 0;" class="icon_yg"></i>品牌制造商直供</span><span><i class="icon_yg"></i>邮费3.5元起</span><span style="margin-right:0"><i class="icon_yg"></i>贴心售后保障</span></div>
			<div class="comment_box"> 评论 <span class="plfont" v-if="oneCommentDate.len!=0">({{oneCommentDate.len}})</span><span class="plfont" v-else>(买了再来评论)</span><a  class="seeAll" >查看全部 <i class="l_arrow"></i></a></div>

			<div class="comments_list" v-show="commentShowDate">
				<div class="comments_item l-clear"><img class="memberpic" src="../assets/img/_d.png" alt="" v-if="oneCommentDate.avatar==''"><img v-else class="memberpic" :src="oneCommentDate.avatar" alt=""><em class="buyer_name">{{oneCommentDate.buyer_name}}</em><span class="commentTime">{{oneCommentDate.evaluation_time}}</span>
				  <p class="pinc">好评</p>
				</div>
			</div>

				<div class="detailConten">
					<div style="border:0;padding:10px 16px;">商品详情</div>
					<div class="detailsbox" v-html="detailsDate.description"></div>
				</div>

		  </div>

		  <div class="buyBox">
      <div class="iconBox">
        <ul>
          <li><router-link :to="{name:'home'}"><span class="icon-car"></span><p class="pt">购物车</p></router-link></li>
          <li><router-link :to="{name:'home'}"><span class="icon-home"></span><p class="pt">首页</p></router-link></li>
        </ul>
      </div>

      <div class="payCartBox">
          <span class="addCartBut" @click="showSpec">立即购买</span>
          <span class="payBut"  >加入购物车</span>
      </div>
    </div>
    <property ref="propertys"></property>
	</section>
  </div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import {mapGetters} from 'vuex'
	import property from '../components/property'
	export default {
		name:"detail",
		data(){
			return{
		  	testRes:"http://www.lamezhi.com/"
			}
		},
		methods:{
			showSpec(){
      	this.$refs.propertys.show()
    	}
		},
		computed:mapGetters([
			'detailsDate',
			'oneCommentDate',
			'commentShowDate'
		]),
		components:{
	     swiper,
		   swiperSlide,
		   property
	    },
		created(){
			let id = this.$route.params.id;
			this.$store.dispatch("getDetailDate",id);
			this.$store.dispatch("getComment",id);
		},
		updated:function(){
			 
		},
		mounted:function(){

		},
		filters:{
	    formatMoney:function (value){
	      value = parseFloat(value);
	      return value.toFixed(2)
	    }
 	 }
	}
</script>