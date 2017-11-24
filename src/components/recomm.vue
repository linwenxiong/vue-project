<template lang="html">
<section id="" class="index_border">
  <div class="hd">{{ parentData.title }}</div>
  <div class="column_box">
    <router-link class="p_link" :to="{name:'detail',params:{id:item.goods_id}}" v-for="item in parentData.content">
      <div class="p_item">
         <img class="" :src="locat+item.default_image">
          <div class="index-main_box">
           <em class="tm">工厂成本¥{{item.cost_price}}</em>
           <span class="title">{{item.goods_name}}</span>
           <b class="brief">【推荐理由】{{item.goods_subname}}</b>
           <div class="price_box"><span class="price" style="padding-top:3px;">¥{{item.price}}</span><i class="cost">¥{{item.market_price}}</i></div>
         </div>
       </div>
     </router-link>
  </div>
</section>
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