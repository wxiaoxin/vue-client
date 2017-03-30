<template>
    <div style="margin: 16px 22px">
        <el-row>
            <el-col :lg="12" :sm="10" :xs="10">
                <h3>{{$root.title}}
                    <small>{{$root.subTitle}}</small>
                </h3>
            </el-col>
            <el-col :lg="12" :sm="14" :xs="14">
                <el-breadcrumb separator="/" style="float: right">
                    <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>

                    <el-breadcrumb-item>媒体资源</el-breadcrumb-item>
                    <el-breadcrumb-item>应用管理</el-breadcrumb-item>
                    <el-breadcrumb-item>应用列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
    </div>


</template>


<script>

    export default {}

</script>