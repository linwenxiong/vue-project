<template>
  <section class="propertybox">
    <transition name="fold">
     	<div class="property_one" v-show="listShow">
        <em class="close_but" @click="closeSpec"></em>
     		<div class="goods_mini">
     			<div class="img_mini"><img :src="testRes+specData.default_image"></div>
              <div class="goods_mini_info">
              	<div class="goods_pricebox"><span class="price">¥{{specData.price}}</span></div>
                  <div class="goods_selectbox"><span>请选择：</span><span class="size_options" v-for="title in specData.spec_names">{{title.name}} / </span></div>
              </div>
     		</div>
     	    <section id="menuWrapper" ref="menuWrapper" style="height:250px; overflow:hidden">
  
             <div class="content">
      	   		<div class="property_itembox" v-for="(item,key) in specData.spec_names" v-if='key!=0'>
      	   			<h3>{{item.name}} ：</h3>
      	   			<span class="pro_but" 
                @click="clickHandler([key-1,spec_item,specData.spec_names.length-1]),clickActive([key-1,spec_item])" 
                v-for="spec_item in item.spec_data" 
                v-bind:class="{active:actData[key-1] == spec_item}" > {{spec_item}}
               </span>
      	   		</div>

      	   		<div class="property_itembox">
      	   			<h3>数量：</h3>
      	   			<span class="decrease_but" @touchstart="decrease" v-bind:class="{on:dec=='disabled'}">-</span><em class="pro-count">{{orderCound}}</em><span class="add_but" @touchstart="add">+</span>
      	   		</div>
             </div>
      	  </section>
     	</div>
    </transition>
    <transition name="fade"><div class="list-mask" v-show="listShow"></div></transition>
    <transition name="fade">
        <div class="hintbox" v-show="showbox">请选择规格属性~</div>
    </transition>
  </section>
</template>
<script type="text/javascript">
 import {mapGetters,mapActions} from 'vuex'
 export default {
   name:'propertybox',
   data(){
    return{
      testRes:"http://www.lamezhi.com/",
      showbox:false,
      listShow:false,
      dec:'',
      orderCound:1 //默认1件
    }
   },
   computed:mapGetters([
      'specData',
      'actData'
   ]),
   methods:{
    closeSpec(){
      this.listShow= false;
    },
    decrease(){
      this.orderCound==1?this.dec="disabled":this.orderCound--;
    },
    add(event){
      this.dec=" ";
      this.orderCound++;
    },
    show(){
      this.listShow = true;
    },
    ...mapActions([
      'clickHandler',
      'clickActive'
    ])
   }
 } 
</script>
<style scoped>
.property_one{
 position: fixed;
 bottom: 50px;
 left: 0;
 right: 0;
 z-index: 89;
 height: 350px;
 background: #fff;
 transform: translate3d(0, 0, 0);
}
.goods_mini{
 padding: 10px 15px;
 display: flex;
 display: -webkit-flex;
 display: box-flex;
 display: -webkit-box-flex;
}
.img_mini {
width: 80px;
height: 80px;
overflow: hidden;
}
.goods_mini_info{
flex:1;
-webkit-flex:1;
box-flex: 1;
-webkit-box-flex: 1;
padding-left: 10px;
}
.goods_pricebox{
  margin-top: 20px;
}
.goods_selectbox {
  margin-top: 10px;
  font-size: 14px;
  color: #8f8f8f;
}
.property_itembox {
  padding:12px 15px;
}
.property_itembox h3{
  font-size: 0.14222rem;
}
.pro_but {
  display: inline-block;
  border:1px solid #cfcfcf;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  color: #333;
}
.pro_but.active{
  border: 1px solid #b4282d;
  color: #b4282d;
}
.add_but,.decrease_but {
   display: inline-block;
   width: 23px;
   height: 23px;
   line-height: 22px;
   border:1px solid #cfcfcf;
   text-align: center;
   border-radius: 3px;
   margin-top: 10px;
   color: #9a9a9a;
   font-size: 13px;
   transition: all 0.2s;
}
.add_but.on,.decrease_but.on {
  background: #e0e0e0;
}

.add_but:active,.decrease_but:active{
  background: #999;
}
.add_but {

}
.decrease_but {
}
.pro-count {
  display: inline-block;
  width: 30px;
  text-align: center;
  margin-top: 10px;
  color: #757575;
}
.close_but{
 position: absolute;
 top: 10px;
 right: 10px;
 width: 25px;
 height: 25px;
 background: url(../assets/img/close.png) no-repeat;
 background-size: 100%;
}
.fold-enter-active,.fold-leave-active{
  transition: all 0.3s
}
.fold-enter-active{
    /*变化成什么样->当元素出来时（显示）*/
    transform: translate3d(0, 0%, 0);
}
.fold-leave-active{
    /*变化成什么样->当元素离开时（消失）*/
    transform: translate3d(0, 100%, 0);
}
.fold-enter,.fold-leave{
    /*初始状态*/
    transform: translate3d(0, 100%, 0);
}

.fade-enter-active,.fade-leave-active{
  transition: all 0.3s
}
.fade-enter,.fold-leave{
  opacity: 0;
  background: rgba(7, 17, 27, 0);
}
.fade-enter-active{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
}
</style>