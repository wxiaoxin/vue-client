import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/modules/DashBoard.vue'

import Supplier from '../components/modules/media/supplier/list/Supplier.vue'
import SupplierNew from '../components/modules/media/supplier/new/SupplierNew.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/supplier/list',
            component: Supplier
        }, {
            path: '/supplier/new',
            component: SupplierNew
        }
    ]
})