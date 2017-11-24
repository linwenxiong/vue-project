import Vue from 'vue'
export default {
   hellow:(state, { id }) => {
      setCurrentThread(state, id)
    }
}
function setCurrentThread (state, id) {
  state.currentThreadID = 123
  // Vue.set(state.messages, message.id, "message132")
}
function getDetailDate(state,msg){
  state.details = msg;
}