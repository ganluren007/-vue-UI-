import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import '../../assets/style/sm.css'


Vue.use(VueRouter)


import index from './index.vue';
import Minput from './demo/MinputDemo.vue';
import Mstar from './demo/MstarDemo.vue'
import Magnify from './demo/MagnifyDemo.vue'
import Mhover from './demo/MhoverDemo.vue'
import Mscroll from './demo/MscrollDemo.vue'
const routes = [
    {path: '/index',component: index,alias: '/'},
    {path: '/Minput',component: Minput},
    {path: '/Mstar',component: Mstar},
    {path: '/Magnify',component: Magnify},
    {path: '/Mhover',component: Mhover},
     {path: '/Mscroll',component: Mscroll}   
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


