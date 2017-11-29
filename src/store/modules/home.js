import * as api from '../../api'
const state = {
	  banner:{},
	  article:{},
	  actPic:{},
	  commend:{},
	  HotRecommend:{},
	  CategoryRecommend:{}
}
const actions = {
	getHomeDate:({commit})=>{
		commit('loadingStatus',true);
		api.api_getHomeDate(function(messages){
			commit("bannerDate",messages[0]);  //数组0是banner的数据
			commit("articleDate",messages[1]);   // 1是文章
			commit("actDate",messages[3]); // 3是活动图
			commit('loadingStatus',false);
		});
	},
	getRecommendDatas:({commit})=>{
		commit('loadingStatus',true);
		api.api_getRecommendData(function(messages){
			commit("RecommendData",messages[0].newRecommend);
			commit("hotRecommendData",messages[1].hotRecommend);
			commit("categoryRecommendData",messages[2]);
			commit('loadingStatus',false);
		}) 
	}
}

const mutations = {
	bannerDate:(state,msg)=>{
   	 getHomeDate(state,msg)	
  },
  articleDate:(state,msg)=>{
   	 getArticleDate(state,msg)	

  },
  actDate:(state,msg)=>{
  	getActDate(state,msg)
  },
  RecommendData:(state,msg)=>{
		getRecommendData(state,msg)
  },
  hotRecommendData:(state,msg)=>{
  	getHotRecommendData(state,msg)
  },
  categoryRecommendData:(state,msg)=>{
  	getCategoryRecommendData(state,msg)
  }
}
const getters = {
	bannerDate : state=>state.banner,
	articleDate : state=>state.article,
	actPic : state=>state.actPic,
	commend: state=>state.commend,
	HotRecommend:state=>state.HotRecommend,
	CategoryRecommend:state=>state.CategoryRecommend
}

function getHomeDate(state,msg){
	state.banner = msg;
}
function getArticleDate(state,msg){
	state.article = msg;
}
function getActDate(state,msg){
	state.actPic = msg;
}
function getRecommendData(state,msg){
	 state.commend = msg;
}
function getHotRecommendData(state,msg){
	state.HotRecommend = msg;
}
function getCategoryRecommendData(state,msg){
	state.CategoryRecommend =msg;
}
export default {
	state,
	actions,
	mutations,
	getters
}