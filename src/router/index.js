import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/modules/DashBoard.vue'

import Macro from '../components/modules/system/macro/list/Macro.vue'
import MacroEdit from '../components/modules/system/macro/edit/MacroEdit.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Dashboard
        }, {
            path: '/macro/list',
            component: Macro
        }, {
            path: '/macro/edit/:id?',
            component: MacroEdit
        }
    ]
})