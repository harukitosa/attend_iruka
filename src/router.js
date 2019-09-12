import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import Homepage from './views/Homepage.vue'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: 'signin'
        },
        {
            path:  '/homepage',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {requiresAuth: true}
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/setting',
            name: 'setting',
            component: () => import('./views/Setting.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/make_room',
            name: 'make_attendance',
            component: () => import('./views/MakeAttendance.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/list/:id/:title',
            name: 'list',
            component: () => import('./views/List.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/make_list/:id',
            name: 'make_list',
            component: () => import('./views/MakeList.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/member_list/:id/:title',
            name: 'MemberList',
            component: () => import('./views/MemberList.vue'),
            meta: {requiresAuth: true}
        },
        {
            path: '/attendance/:id',
            name: 'Attendance',
            component: () => import('./views/Attendance.vue'),
            meta: {requiresAuth: true}   
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        }
    ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) next('signin')
    else if (!requiresAuth && currentUser) next()
    else next()
})

export default router
