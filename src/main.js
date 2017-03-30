import Vue from 'vue'
import router from './router/index'
import ElementUI from 'element-ui'

import axios from 'axios'

import App from './App'

// 引用mock数据
import './mock/index'

// 引入scss样式
import './assets/css/test.scss'

import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI);

Vue.prototype.$http = axios;

axios.defaults.baseURL = "http://localhost:8888";

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