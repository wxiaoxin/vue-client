<template>
<el-row>
    <el-col :span="12">
        <div class="title" style="margin: 10px">
            <h2>{{$root.title}}
                <small>{{$root.subTitle}}</small>
            </h2>
        </div>
    </el-col>
    <el-col :span="12">
        <div style="float: right" class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>

                <el-breadcrumb-item>媒体资源</el-breadcrumb-item>
                <el-breadcrumb-item>应用管理</el-breadcrumb-item>
                <el-breadcrumb-item>应用列表</el-breadcrumb-item>

            </el-breadcrumb>

        </div>
    </el-col>
</el-row>



</template>


<script>

    export default {}

</script>

<style>

    .breadcrumb {
        margin: 16px 22px;
        padding: 4px 20px;
    }

    div.el-breadcrumb {
        font-size: 15px;
    }



</style>