import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import './public-path'
// import {router} from './router'

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  // routes,
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.$destroy()
})