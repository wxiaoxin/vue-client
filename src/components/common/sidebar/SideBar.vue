<template>

    <div class="sidebar">

        <div class="sidebar-profile">

            <div class="sidebar-profile-logo">
                <router-link to="/">
                    <img src="../../../assets/img/logo.png" alt="LOGO">
                </router-link>
            </div>

            <div class="sidebar-profile-user">

                <el-dropdown>
                    <span class="el-dropdown-link" style="color: #bfcbd9;">
                        {{user}} &nbsp;<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="background: #1f2d3d; color: #bfcbd9; border: none">
                        <el-dropdown-item>退出</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>
        </div>

        <el-menu default-active="1" theme="dark">

            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>媒体管理</template>

                <el-submenu index="1-1">

                    <template slot="title">供应商管理</template>

                    <router-link to="/supplier/list">
                        <el-menu-item index="1-1-1">列表</el-menu-item>
                    </router-link>

                    <router-link to="/supplier/new">
                        <el-menu-item index="1-1-2" to="/supplier/new">新增</el-menu-item>
                    </router-link>

                    <router-link to="/supplier/edit">
                        <el-menu-item index="1-1-3" to="/supplier/edit">编辑</el-menu-item>
                    </router-link>

                </el-submenu>


                <el-submenu index="1-2">
                    <template slot="title">站点管理</template>
                    <el-menu-item index="2-1-1">列表</el-menu-item>
                    <el-menu-item index="2-1-2">新增</el-menu-item>
                    <el-menu-item index="2-1-3">编辑</el-menu-item>
                </el-submenu>


                <el-submenu index="1-3">
                    <template slot="title">应用管理</template>
                    <el-menu-item index="1-3-1">列表</el-menu-item>
                    <el-menu-item index="1-3-2">新增</el-menu-item>
                    <el-menu-item index="1-3-3">编辑</el-menu-item>
                </el-submenu>

            </el-submenu>

            <el-submenu index="2">

                <template slot="title"><i class="el-icon-menu"></i>投放管理</template>

                <el-submenu index="2-1">
                    <template slot="title">订单管理</template>
                    <el-menu-item index="2-1-1">列表</el-menu-item>
                    <el-menu-item index="2-1-2">新增</el-menu-item>
                    <el-menu-item index="2-1-3">编辑</el-menu-item>
                </el-submenu>


                <el-submenu index="2-2">
                    <template slot="title">创意管理</template>
                    <el-menu-item index="2-2-1">列表</el-menu-item>
                    <el-menu-item index="2-2-2">新增</el-menu-item>
                    <el-menu-item index="2-2-3">编辑</el-menu-item>
                </el-submenu>

            </el-submenu>

            <el-submenu index="3">

                <template slot="title">
                    <i class="el-icon-setting"></i>系统管理
                </template>

                <el-submenu index="3-1">
                    <template slot="title">元素管理</template>
                    <el-menu-item index="3-1-1">列表</el-menu-item>
                    <el-menu-item index="3-1-2">新增</el-menu-item>
                    <el-menu-item index="3-1-3">编辑</el-menu-item>
                </el-submenu>

                <el-submenu index="3-2">
                    <template slot="title">模板类型</template>
                    <el-menu-item index="3-2-1">列表</el-menu-item>
                    <el-menu-item index="3-2-2">新增</el-menu-item>
                    <el-menu-item index="3-2-3">编辑</el-menu-item>
                </el-submenu>

                <el-submenu index="3-3">
                    <template slot="title">模板管理</template>
                    <el-menu-item index="3-3-1">列表</el-menu-item>
                    <el-menu-item index="3-3-2">新增</el-menu-item>
                    <el-menu-item index="3-3-3">编辑</el-menu-item>
                </el-submenu>

            </el-submenu>


        </el-menu>

    </div>

</template>

<script>

    export default {
        data () {
            return {
                user: "Admin"
            }
        },
        methods: {
            foldMenu () {
                alert("...");
            }
        }
    }

</script>

<style>

    .sidebar {
        height: 100%;
        background: #324157;
    }

    .sidebar-profile {
        height: 124px;
        text-align: center;
    }

    .sidebar-profile-logo {
        padding-top: 12px;
        padding-bottom: 3px;
    }

    .sidebar-profile-logo img {
        height: 64px;
    }

    .sidebar-profile-user {
        height: 18px;
        padding-top: 3px;
        padding-bottom: 12px;
    }

    a {
        text-decoration: none;
        color: #bfc8ca;
    }

</style>