<template>
  <div id="footer_nav">
      <ul class="flex-h">
          <li class="flex-item selected-menu">
             <router-link to="/"><span class="icon-home"></span><p>首页</p></router-link>
          </li>
          <li class="flex-item">
              <router-link to="/category"><span class="icon-classify"></span><p>去分类</p></router-link>
          </li>
          <li class="flex-item">
              <router-link to="/shopcart"><span class="icon-car"></span><p>购物车</p></router-link>
          </li>
          <li class="flex-item">
              <router-link to="/login"><span class="icon-member"></span><p>我的</p></router-link>
          </li>
      </ul>
  </div>
</template>