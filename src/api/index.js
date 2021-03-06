import axios from 'axios'
const head      = {'X-Platform':'h5', 'Accept':'applicationnd.lmz.v1+json', 'Content-Type':'application/json'}

// const homedt = {
//     name: 'homeData',
//     threadID: 't_1',
//     threadName: 'Jing and Bill'
//   };

// const LATENCY = 16
// export function getAllMessages (cb) {
//   // setTimeout(() => { cb(data) }, LATENCY)
//   setTimeout(function(){
//   	cb(data)
//   },LATENCY);
// }

export function getAllHomeDate (cb) {
  cb(homedt)
}

export function api_getHomeDate (cb) {
  axios.get('http://api.lamezhi.cn/app/homepage/banner', {
    headers:head
  })
  .then(function (response) {
     cb(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  }); 
}

export function api_getRecommendData (cb) {
  axios.get('http://api.lamezhi.cn/app/homepage/recommend', {
    headers:head
  })
  .then(function (response) {
     cb(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  }); 
}

export function api_getDetailDate (cb,id) {
  axios.get('http://api.lamezhi.cn/app/goods/'+id, {
    headers:head
  })
  .then(function (response) {   
    cb(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  }); 
}
export function api_getComment (cb,id) {
  axios.get('http://api.lamezhi.cn/app/goods/'+id+'/comment', {
    headers:head
  })
  .then(function (response) {   
    cb(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  }); 
}
export function api_getCategory (cb,params) {
  axios.get('http://api.lamezhi.cn/app/category', {
    headers:head
  }).then(function(response){
    cb(response.data.data)
  }).catch(function (error) {
    console.log(error);
  });
}