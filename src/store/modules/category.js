import * as api from '../../api'
const state = {
   bigCategory:[],
   smallCategory:[],
   isActive:0
}
const actions = {
   getCategoryData:({commit},id)=>{
    id = id==null? 0:id;
    api.api_getCategory(function(data){
       commit("CategoryData",[data,id])
    });
   }
}
const mutations = {
   CategoryData:(state,data)=>{
     updataBigCategory(state,data);
   }
}
const getters = {
	 BigCategorydata:state=>state.bigCategory,
   SmallCategory:state=>state.smallCategory,
   isActive:state=>state.isActive
}
function updataBigCategory(state,data){
  let sub = data[1];
  let category = data[0];
  state.bigCategory = category;
  state.smallCategory = category[sub].subs;
  state.isActive = sub;
}
export default {
	state,
	actions,
	mutations,
	getters
}