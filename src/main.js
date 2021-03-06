import Vue from 'vue';
import App from './App.vue';
import TOP from './pages/TOP.vue';

// vue-router と routes.js をインポート
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// VueRouterをプラグインとして指定
Vue.use(VueRouter)

// VueRouterインスタンスを作成
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
new Vue({
  el: '#app',
  router, // VueインスンタンスにVueRouterインスンタンスを渡す
  data:{
    show:true
  },
  render: h => h(App)
})

new TOP({
  render: h => h(top),
  data:{
    show:true
  }
}).$mount('#top')
