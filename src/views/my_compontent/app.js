import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import '../../assets/style/sm.css'
import dragDir from "./directive/drag.js"
import loadImg from "./directive/loadImg.js"
import $ from "../../assets/js/lib/zepto.min.js"

Vue.use(VueRouter)
//全局自定义指令
Vue.directive('drag',dragDir)
Vue.directive('load',loadImg)

import index from './index.vue';
import Minput from './demo/MinputDemo.vue';
import Mstar from './demo/MstarDemo.vue'
import Magnify from './demo/MagnifyDemo.vue'
import Mhover from './demo/MhoverDemo.vue'
import Mscroll from './demo/MscrollDemo.vue'
import Mdrag from './demo/Mdrag.vue'
import McheckorradioDemo from './demo/McheckorradioDemo.vue'
import MprogressDemo from './demo/MprogressDemo.vue'

const routes = [
    {path: '/index',component: index,alias: '/',meta: {
        keepAlive: true // 需要被缓存
      }},
    {path: '/Minput',component: Minput,meta: {
        keepAlive: false // 需要被缓存
      }},
    {path: '/Mstar',component: Mstar,meta: {
        keepAlive: true // 需要被缓存
      }},
    {path: '/Magnify',component: Magnify,meta: {
        keepAlive: true // 需要被缓存
      }},
    {path: '/Mhover',component: Mhover,meta: {
        keepAlive: true // 需要被缓存
      }},
     {path: '/Mscroll',component: Mscroll,meta: {
        keepAlive: true // 需要被缓存
      }},
        {path: '/Mdrag',component: Mdrag,meta: {
        keepAlive: true // 需要被缓存
      }},
      {path: '/McheckorradioDemo',component: McheckorradioDemo,meta: {
        keepAlive: true // 需要被缓存
      }},
      {path: '/MprogressDemo',component: MprogressDemo,meta: {
        keepAlive: true // 需要被缓存
      }}
]
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


