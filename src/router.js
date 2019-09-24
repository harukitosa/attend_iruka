import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import RollCall from './views/RollCall.vue'
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
            path: '/',
            name: 'home',
            component: Home,
            meta: {requiresAuth: true}
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/roll_call/:year/:month/:day/:count',
            name: 'RollCall',
            component: RollCall,
            meta: {requiresAuth: true}
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
