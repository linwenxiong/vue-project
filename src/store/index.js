import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
// import mutations from './modules/mutations'
import home   from './modules/home'
import detail from './modules/detail'

const state = {
  currentThreadID: null
}

let store =  new Vuex.Store({
   modules:{
	detail,
	home
   },
	actions,
	getters,
	mutations,
	state
});
export default store
