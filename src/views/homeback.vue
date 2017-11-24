<template>
  <div class="indx">
    <div class="" >
      <swiper :options="swiperOption" ref="mySwiper">
         <swiper-slide v-for="item in banner0"><a :href="item.ad_link" ><img width="100%" :src="locat+item.ad_logo" :alt="item.ad_name"></a></swiper-slide>
         <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="tagline"><span><i style="margin-left: 0;" class="icon_yg"></i>品牌制造商直供</span><span><i class="icon_yg"></i>邮费3.5元起</span><span style="margin-right:0"><i class="icon_yg"></i>贴心售后保障</span></div>
    <div class="notice-box">
       <div class="img-box"><img src="../assets/img/Artboard.png" alt=""></div>
       <div class="text-box">
          <div class="slidebox" id="slidebox">
            <a  v-for="item in article" class="MswiperSlide" href=" ">{{item.title}}</a>
         </div>
       </div>
    </div>
    <active :parentData='banner'></active>
    <product :parentData='newRecommend'></product>
    <recomm :parentData='hotRecommend'></recomm>
    <productlist :parentData='categoryRecommend'></productlist>
    <food></food>
  </div>
</template>
<script type="text/javascript">
var locat = "http://www.lamezhi.com/";
import '../assets/css/lcss.css'
import '../assets/css/swiper-3.4.2.min.css'
import $ from 'jquery'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import product from '../components/product'
import food from '../components/fooder'
import active from '../components/active'
import recomm from '../components/recomm'
import productlist from '../components/product_list'
const bannerURL = 'http://api.lamezhi.cn/app/homepage/banner'
const recommURL = 'http://api.lamezhi.cn/app/homepage/recommend'
const head      = {'X-Platform':'h5', 'Accept':'applicationnd.lmz.v1+json', 'Content-Type':'application/json'}
var i =0;
export default {
  name:'indx',
   data() {
     return {
       swiperOption: {
         autoplay: 3000,
         pagination :'.swiper-pagination',
         loop : true
       },
       locat:locat,
       productObj:{},
       newRecommend:{},
       hotRecommend:{},
       article:{},
       banner0:{},
       banner:{},
       categoryRecommend:{}
     }
   },
   components: {
   swiper,
   swiperSlide,
   food        : food,
   product     : product,
   active      : active,
   recomm      : recomm,
   productlist : productlist
 },
 created(){
   addEventListener('touchstart',function(){},false);
   this.getData();
   this.getRecommendData();
  },
  mounted(){
  },
  methods:{
    sroll:function(){
      if ($(".slidebox").find("a").length > 1 ){
           var time = setInterval(function(){$(".slidebox").animate({marginTop:"-34px"},700,function(){
              $(this).css({marginTop:0}).find("a:first").appendTo(this);
              });},3500);
         }
    },
     getData:function(){
      this.$http.get(bannerURL,{
        headers:head
      }).then((response)=>{
            response = response.body;
            this.article = response.data[1];
            this.banner0 = response.data[0];
            this.banner = response.data[3];
            this.$nextTick(()=>{
              if(i==0)
              {
                this.sroll();
                 i++;
              }
            });
         },(err)=>{
            console.log("lin404");
         });
     },
     getRecommendData:function(){
      this.$http.get(recommURL,{
          headers:head
        }).then((response)=>{
            this.newRecommend      = response.body.data[0].newRecommend;
            this.hotRecommend      = response.body.data[1].hotRecommend;
            this.categoryRecommend = response.body.data[2];
           },(err)=>{
              console.log("lin404");
           });
       }
  },
  computed:{
  },
  watch:{
    productlist(){
      alert(12);
    }
  },
  updated(){

  }
}
</script>