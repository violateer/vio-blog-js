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
// 引入element-ui
import { Tag, Button, Input, Form } from 'element-ui';
// 代码高亮
import Highlight from 'vue-markdown-highlight';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
// 使用element-ui
Vue.use(Tag);
Vue.use(Button);
Vue.use(Input);
Vue.use(Form);

Vue.use(Highlight);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
