import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import RollCall from './views/RollCall.vue'
import InsertNewData from './views/InsertNewData.vue'
import RollBook from './views/RollBook.vue'
import DetailStudent from './views/DetailStudent.vue'
import firebase from 'firebase'
import VueAnalytics from 'vue-analytics'
Vue.use(Router)


let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '*',
            redirect: 'signin'
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
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
            path: '/roll_call/:year/:month/:day',
            name: 'RollCall',
            component: RollCall,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/insert_new_data',
            name: 'InsertNewData',
            component: InsertNewData,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/roll_book',
            name: 'RollBook',
            component: RollBook,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/detail_student/:id/:number',
            name: 'DetailStudent',
            component: DetailStudent,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !currentUser) next({
        path: '/signin'
    })
    else if (!requiresAuth && currentUser) next()
    else next()
})

Vue.use(VueAnalytics, {
    id: 'UA-144819780-5',
    router
})


export default router