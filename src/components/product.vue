<template>
  <section class="product_box">
     <div class="hd"><a href="javascript:;" class="categry_link"> {{ parentData.title }} <i class="icon_more"></i></a></div>
     <div class="bd">
          <div class="list_panel"  v-for="item in parentData.content">
             <div class="n_B">
              <router-link class="prod_link" :to="{name:'detail',params:{id:item.goods_id}}">
                <div class="pd_pic"><img class="pc" :src="locat+item.default_image"></div>
                <span class="ac_txt">工厂成本¥{{item.cost_price}}</span>
                <p class="titles">{{item.goods_name}}</p>
                <p class="monerybox"><span class="price">¥{{item.price}}</span><i class="cost">¥{{item.market_price}}</i></p>    
              </router-link>
            </div>
          </div>
     </div>
  </section>
</template>
<script type="text/javascript">
var locat='http://www.lamezhi.com/';
export default {
  name:'product',
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
