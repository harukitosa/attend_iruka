import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/global.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

const config = {
  apiKey: "AIzaSyDyKaTkvxGhdLpnc_iiMwKkZ4pdueQ5V6E",
  authDomain: "auth-test-1464a.firebaseapp.com",
  databaseURL: "https://auth-test-1464a.firebaseio.com",
  projectId: "auth-test-1464a",
  storageBucket: "",
  messagingSenderId: "118993903454",
  appId: "1:118993903454:web:a69315f1a5580760"
}
let app
firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
