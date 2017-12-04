import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import home   from './modules/home'
import detail from './modules/detail'
import category from './modules/category'
import com from './modules/com'
let store =  new Vuex.Store({
   modules:{
	detail,
	home,
	category,
	com
   }
});
export default store
