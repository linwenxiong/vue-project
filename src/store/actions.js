import * as api from '../api'
// 要操作数据的动作
export const getAllMessages = ({ commit }) => {
  // api.getAllMessages(messages => {
  // 	console.log(messages)
  //   commit("hellow", { messages })
  // })
  api.getAllMessages(function(messages){
  	commit("hellow", { messages })
  });
}

// export const getDetailDate = ({commit},gid)=>{
//   api.api_getDetailDate(function(messages){
//     commit("DetailDate",messages)
//   },gid);
// }