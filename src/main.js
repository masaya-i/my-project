import Vue from 'vue';
import App from './App.vue';

// vue-router と routes.js をインポート
import VueRouter from 'vue-router';
import {
  routes
} from './routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// VueRouterをプラグインとして指定
Vue.use(VueRouter)

// VueRouterインスタンスを作成
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router, // VueインスンタンスにVueRouterインスンタンスを渡す
  render: h => h(App)
})