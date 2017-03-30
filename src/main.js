import Vue from 'vue'
import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://localhost:8888";

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('icon', Icon);

// 引用mock数据
import './mock/index'

// 引入scss样式
import './assets/css/test.scss'

import App from './App'

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data() {
        return {
            msg: '',
            title: 'Title',
            subTitle: 'SubTitle'
        }
    }
});