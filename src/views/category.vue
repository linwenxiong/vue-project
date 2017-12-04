<template>
<section class="categoryBox">
  <h2 class="category-title" >分类{{isActive}}</h2>
  <div class="category">
     
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="content" ref="menuMain" id="menuMain">
       <li v-for="(item,key) in bigCategory" v-on:click="getCategoryData(key)" v-bind:class="{'active':isActive === key}">{{item.name}}</li>
      </ul>
    </div>
      <div class="product-wrapper" ref="productWrapper">
        <div class="roll-content">
          <h3 class="categoryBan"><a href="#"><img src="http://www.lamezhi.com/data/system/default_cycle_image.jpg" alt=""></a></h3>
          <section v-for="obj in smallCategory">
            <h2 class="roll-title">{{obj.name}}</h2>
            <ul class="group-box l-clear">
               <li v-for="subs in obj.subs"><router-link class="goods-item" :g_id="subs.id" :to="'/goods?gid='+subs.id"><img :src="'http://www.lamezhi.com/'+subs.image" alt=""><aside>{{subs.name}}</aside></router-link></li>
            </ul>
          </section>
        </div>
      </div>
      <food></food>
  </div>
</section>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import * as api from '../api'
import BScroll from 'better-scroll'
import food from '@/components/fooder'
  export default{
    name:'category',
    data(){
      return{
         bigCategory:[],
         smallCategory:[],
         isActive:0,
         scroll1:false,
         scroll2:false
      }
    },
    methods:{
      getCategoryData:function(id){
        let thar = this;
        id = id==null? 0:id;
        api.api_getCategory(function(data){
           thar.bigCategory = data;
           thar.isActive = id;
           thar.smallCategory = data[id].subs;
           thar.$nextTick(function(){
              if(this.scroll1&&this.scroll2)
                {
                   this.scroll1.refresh();
                   this.scroll2.refresh();
                }
                else{
                    this.scroll1 = new BScroll(thar.$refs.menuWrapper, {click: true });
                    this.scroll2 = new BScroll(thar.$refs.productWrapper, {click: true }); 
                }

            });
        });
       }
    },
    computed:{
    },
    components:{
      food
    },
    created(){
      this.getCategoryData();
    },
    updated(){
  
    },
    mounted(){ 

    }
  }
</script>