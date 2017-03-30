import Vue from "vue"
import VueRouter from "vue-router"

import Dashboard from "../components/modules/DashBoard.vue"

import Macro from "../components/modules/system/macro/list/Macro.vue"
import MacroEdit from "../components/modules/system/macro/edit/MacroEdit.vue"

import Suppiler from "../components/modules/media/supplier/list/Supplier.vue"
import SupplierEdit from "../components/modules/media/supplier/edit/SupplierEdit.vue"
import SupplierDetail from "../components/modules/media/supplier/detail/SupplierDetail.vue"

import Site from "../components/modules/media/site/list/Site.vue"
import SiteEdit from "../components/modules/media/site/edit/SiteEdit.vue"

import App from "../components/modules/media/app/list/App.vue"
import AppEdit from "../components/modules/media/app/edit/AppEdit.vue"

import AdSpace from "../components/modules/media/adspace/list/AdSpace.vue"
import AdSpaceEdit from "../components/modules/media/adspace/edit/AdSpaceEdit.vue"


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Dashboard
        }, {
            path: "/macro/list",
            component: Macro
        }, {
            path: "/macro/edit/:id?",
            component: MacroEdit
        }, {
            path: "/supplier/list",
            component: Suppiler
        }, {
            path: "/supplier/edit/:id?",
            component: SupplierEdit
        }, {
            path: "/supplier/detail/:supplierId?",
            component: SupplierDetail
        }, {
            path: "/site/:supplierId/list",
            component: Site
        }, {
            path: "/site/edit/:id?",
            component: SiteEdit
        }, {
            path: "/app/:supplierId/list",
            component: App
        }, {
            path: "/app/edit/:id?",
            component: AppEdit
        }, {
            path: "/adspace/:supplierId/list",
            component: AdSpace
        }, {
            path: "/adspace/edit/:id?",
            component: AdSpaceEdit
        }

    ]
})