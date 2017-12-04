import Vue from 'vue'
// import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
const app = new Vue({
	router,
	store
}).$mount("#app");  //延迟挂载
// getHomeData(store);
