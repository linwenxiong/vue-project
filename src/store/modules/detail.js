import * as api from '../../api'
const state = {
  details:{},
  oneComment:{
  	len:0
  },
  commentShow:false,
  spec_data:{
        spec_1:[],   // 规格1
        spec_2:[],   // 规格2
        spec_3:[],   // 规格3
        spec_names:[],  // 规格名称
        spec_all:[],
        price:0,
        default_image:''
   },
   orderInfo:{
        goods_id:'',
        spec_id:'',
        quantity:0,
        price:0,
        all_info:{}
    },
    pass:false,
    plate:[],
    act:[],
    actIndex:0
}
const actions = {
	getDetailDate:({commit},gid)=>{
	  api.api_getDetailDate(function(messages){
	    commit("DetailDate",messages);
	    commit("SpecDate",messages);
	  },gid);
	},
	getComment:({commit},gid)=>{
	  api.api_getComment(function(messages){
	  	if(messages.length === 0){
	  		 commit("NoComdate")
	  	}else{
	  		commit("CommentDate",messages)
	  	}
	  },gid);
	},
	clickHandler:({commit},ds)=>{
		 commit("HandlerDate",ds)
	},
	clickActive:({commit},ds)=>{
		commit("ActiveDate",ds)
	}
}

const mutations = {
   DetailDate:(state,msg)=>{
      getDetailDate(state,msg);
   },
   SpecDate:(state,msg)=>{
   	  getSpecDate(state,msg);
   },
   CommentDate:(state,msg)=>{
   	  getCommentDate(state,msg);
   },
   NoComdate:(state)=>{
   	 noComdate(state)
   },
   HandlerDate:(state,msg)=>{
   	let inds,str,len;
		inds = msg[0];
		str  = msg[1];
		len  = msg[2];
   	updateSpecDate(state,inds,str,len);
   },
   ActiveDate:(state,msg)=>{
   	let i,con;
   	i   = msg[0];
   	con = msg[1];
   	updateActDate(state,i,con);
   }
}
const getters = {
	detailsDate:state => state.details,
	oneCommentDate:state => state.oneComment,
	commentShowDate:state => state.commentShow,
	specData:state => state.spec_data,
	actData:state => state.act
}

function updateSpecDate(state,inds,str,len){
	// console.log(inds,str,len)
	state.plate[inds] = str;
	if(state.plate.length != len)
    {
        console.log("请继续选择属性00000");
        return false;
    }
    else{
      for(var i = 0; i<state.plate.length;i++){
        if( state.plate[i] == undefined ){
            console.log("请选择属性");
            return false;
            break;
        }
      }
    }
  switch(len)
      {
        case 1:
        for( var spec_key in state.spec_data.spec_all)
        {
           if( state.spec_data.spec_all[spec_key].spec_2 == state.plate[0]){
            state.orderInfo.spec_id = state.spec_data.spec_all[spec_key].spec_id;
            state.orderInfo.goods_id = state.spec_data.spec_all[spec_key].goods_id;
            state.orderInfo.all_info = state.spec_data.spec_all[spec_key];  //全部内容
            state.orderInfo.price = state.spec_data.spec_all[spec_key].price;
            state.spec_data.default_image = state.spec_data.spec_all[spec_key].spec_1;  //商品图片
            state.pass=true;
           }
        }
        break;
        case 2:
        for( var spec_key in state.spec_data.spec_all)
        {
           if( state.spec_data.spec_all[spec_key].spec_2 == state.plate[0] && state.spec_data.spec_all[spec_key].spec_3==state.plate[1] ){
             state.orderInfo.spec_id = state.spec_data.spec_all[spec_key].spec_id;
             state.orderInfo.goods_id = state.spec_data.spec_all[spec_key].goods_id;
             state.orderInfo.all_info = state.spec_data.spec_all[spec_key];  //全部内容
             state.orderInfo.price = state.spec_data.spec_all[spec_key].price;
             state.spec_data.default_image = state.spec_data.spec_all[spec_key].spec_1;
             state.pass=true;
           }
        }
        break;
        case 3:
        for( var spec_key in state.spec_data.spec_all)
        {
           if(state.spec_data.spec_all[spec_key].spec_2 == state.plate[0] && state.spec_data.spec_all[spec_key].spec_3==state.plate[1] && state.spec_data.spec_all[spec_key].spec_4==state.plate[2]){
             state.orderInfo.spec_id = state.spec_data.spec_all[spec_key].spec_id;
             state.orderInfo.goods_id = state.spec_data.spec_all[spec_key].goods_id;
             state.orderInfo.all_info = state.spec_data.spec_all[spec_key];  //全部内容
             state.orderInfo.price = state.spec_data.spec_all[spec_key].price;
             state.spec_data.default_image = state.spec_data.spec_all[spec_key].spec_1;
             state.pass=true;
           }
        }
        break;
      }
}
function updateActDate(state,i,con){
	let arr = new Array(i);
	arr[i] = con;
	state.act = arr;
	console.log(arr)
}
function getDetailDate(state,msg){
  state.details = msg;
}
function getCommentDate(state,msg){
    state.commentShow = true;
    state.oneComment= msg[0];
    state.oneComment.len = msg.length;
}
function noComdate(state){
	state.commentShow = false;
	state.oneComment.len = 0;
}
function getSpecDate(state,msg){
	  var temp_spec_1=[],
	  		temp_spec_2=[],
	  		temp_spec_3=[],
	  		temp=[];

	  state.spec_data.price = msg.price;
    state.spec_data.default_image = msg.default_image;
    state.spec_data.spec_names = msg.spec_names;
    // 问题所在应该
    
    for( var key in msg.spec){
    	if( msg.spec.hasOwnProperty(key) )
    	{
      	temp_spec_1.push(msg.spec[key].spec_1);
      	temp_spec_2.push(msg.spec[key].spec_2);
      	temp_spec_3.push(msg.spec[key].spec_3);
      }
    }
   
    state.spec_data.spec_1 = temp_spec_1.getArray();   // 规格1
    state.spec_data.spec_2 = temp_spec_2.getArray();   // 规格2
    state.spec_data.spec_3 = temp_spec_3.getArray();   // 规格2

    temp.push(state.spec_data.spec_1);    //temp 是用来存放所有规格的一个数组方便后面循环取值并附加到自定义的一个健值 spec_data
    temp.push(state.spec_data.spec_2);     //temp 是写死的有点尴尬
    temp.push(state.spec_data.spec_3);

    for(var i =0; i<state.spec_data.spec_names.length; i++ ){
      state.spec_data.spec_names[i].spec_data = temp[i];  //给这条字段添加健值 spec_data
    }
    state.spec_data.spec_all = msg.spec;     // 规格名称
}
Array.prototype.getArray = function(){  //数组去重
 		var temp =[];
		for(var i=0;i<this.length;i++){
			if(temp.indexOf(this[i]) === -1 ){
				temp.push(this[i])
			}
		}
		return temp;
}

export default {
	state,
	actions,
	mutations,
	getters
}