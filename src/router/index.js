import Vue       from 'vue'
import VueRouter from 'vue-router'
import Hello     from '@/components/Hello'
import Home      from '@/views/home'
import Detail    from '@/views/details'
import App       from '../App'
Vue.use(VueRouter)
const routes= [
	{ 
		path: "/", 
		component:App,
    children:[
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
	}
]

const router = new VueRouter({
	mode:'history',
	routes:routes
});

export default router;
