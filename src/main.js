import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 引入axios
import api from './request/api';
// 引入vuex
import store from './store';
// 引入全局样式
import '@/assets/css/global.css';
// 引入iconfont
import '@/fonts/iconfont.js';

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
