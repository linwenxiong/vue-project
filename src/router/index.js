import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/views/home'
import Detail from '@/views/details'

Vue.use(VueRouter)
const routes= [
	{ 
		path: "/", 
		redirect: "/home" 
	},//重定向,指向了home组件  
	{  
      name:"home",
      path: "/home", 
      component: Home
  },
  {  
  		name:"detail",
      path: "/detail/:id", 
      component: Detail
  }

]

const router = new VueRouter({
	mode:'history',
	routes:routes
});

export default router;
