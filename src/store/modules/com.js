const state = {
   loading:0
}
const actions = {
   
}
const mutations = {
  loadingStatus:(state,states)=>{
      if(state.loading == 0 && !states){
            return ;
        }
        state.loading = states ? ++state.loading : --state.loading;
       
      console.log(states)
  }
}
const getters = {
	loading:state => state.loading
}
export default {
	state,
	actions,
	mutations,
	getters
}