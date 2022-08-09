import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import {createRouter, createWebHistory} from 'vue-router'

import home from '../view/home/index.vue'
import sex from '../view/sex/index.vue'
import user from '../view/user/index.vue'


export const routes = new VueRouter({
    // history:createWebHistory(),
    routes : [
        {
            path: '/',
            name:'home',
            component:home,
            children: [
                {
                    path: '/sex',
                    name:'sex',
                    component:sex,
                },
                {
                    path: '/user',
                    name:'user',
                    component:user,
                }
            ]
        },
        
    ]
})