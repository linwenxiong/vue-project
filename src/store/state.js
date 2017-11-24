import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
	count : 10000,
	bool:true
}
const actions = {
	increment:({commit})=>{
	   commit('a')
	},
	increment1:({commit})=>{
	   commit('b')
	},
	increment2:({commit})=>{
		commit('c');
	}
}
const mutations = {
	a:(state)=>{
		state.count++;
	},
	b:(state)=>{
		state.count--;
	},
	c:(state)=>{
		state.bool = !state.bool
	}
}
const getters = {
	count:(state)=>{
		return state.count;
	},
	bool:(state)=>{
		return state.bool
	}
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});