<template>
    <div id="app">

        <el-row class="wrapper">

            <el-col :lg="4" :md="4" :sm="5" :xs="6" class="side-wrapper">
                <side-bar></side-bar>
            </el-col>

            <el-col :lg="20" :md="20" :sm="19" :xs="18">
                <bread></bread>
                <div class="content-wrapper">
                    <!-- 路由窗口 -->
                    <router-view></router-view>
                </div>


            </el-col>

        </el-row>

    </div>
</template>

<script>

    import HeadNav from './components/common/headnav/HeadNav.vue'
    import Bread from './components/common/bread/Bread.vue'
    import SideBar from './components/common/sidebar/SideBar.vue'
//    import MainContent from './components/common/main/MainContent.vue'

    export default {
        name: 'app',
        data () {
            return {

            }
        },
        components: {
            HeadNav, Bread, SideBar
        }
    }


</script>

<style>

    #app {
        height: 100%;
    }

    .wrapper {
        height: 100%;
    }

    .side-wrapper {
        height: 100%;
    }

    .content-wrapper {
        height: 100%;
        margin: 5px;
    }

</style>