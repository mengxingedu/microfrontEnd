import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import {createRouter, createWebHistory} from 'vue-router'

import home from '../view/home/index.vue'

const routes = [
    {
        path: '/',
        name:'home',
        component:home,
    },
    {
        path: '/child1*',
        name:'sex',
        component:() => import(/* webpackChunkName: "nextjs11" */ '../view/sex/index.vue'),
    },
    {
        path: '/child2*',
        name:'user',
        component: () => import(/* webpackChunkName: "nextjs11" */ '../view/user/index.vue'),
    }
]

export const router = new VueRouter({
    // history:createWebHistory(),
    mode: 'history',
    routes
})
// export default routes