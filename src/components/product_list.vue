<template>
<div>
  <section class="product_box" v-for="item in parentData.categoryRecommend">
     <div class="hd"><a :href="item.link" class="categry_link"> {{ item.title }} <i class="icon_more"></i></a></div>
     <div class="bd">
          <div class="list_panel"  v-for="good in item.goods">
             <div class="n_B">
              <router-link class="prod_link" :to="{name:'detail',params:{id:good.goods_id}}" >
	                <div class="pd_pic"><img class="pc" :src="locat+good.default_image"></div>
	                <span class="ac_txt">工厂成本 ¥{{good.m_price}}</span>
	                <p class="titles">{{good.goods_name}}</p>
	                <p class="monerybox"><span class="price">¥{{good.price}}</span><i class="cost">¥{{good.market_price}}</i></p>
              </router-link>
            </div>
          </div>
     </div>
  </section>
</div>
</template>
<script type="text/javascript">
var locat='http://www.lamezhi.com/';
export default {
  data(){
    return{
      locat:locat
    }
  },
  props:{
    parentData:Object
  }
}
</script>
