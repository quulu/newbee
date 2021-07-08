import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动设置rem基准值（html标签
import 'amfe-flexible'

// 引入vant 
import './utils/vant'
import './assets/css/common.less'

// 二次封装导航栏，并将导航栏设置成全局组件
import myNavBar from './components/common/navBar/MyNavBar.vue'
Vue.component('my-nav-bar',myNavBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
