<template>
    <section>
        <el-card>
            <!-- 操作面板 -->
            <div class="option-panel">

                <el-row >

                    <!-- 快捷操作 -->
                    <el-col :span="3">

                        <!-- 新增 -->
                        <el-button type="primary"
                                   size="small"
                                   title="新增">
                            <i class="el-icon-plus"></i>
                        </el-button>

                        <!-- 删除 -->
                        <el-button type="danger"
                                   icon="delete"
                                   size="small"
                                   title="批量删除"
                                   @click="del"
                                   :disabled="selectedData == ''"></el-button>

                    </el-col>

                    <!-- 搜索框 -->
                    <el-col :span="8" :offset="9">

                        <el-input placeholder="请输入内容" size="small">
                            <el-select slot="prepend" placeholder="请选择">
                                <el-option label="姓名" value="1"></el-option>
                                <el-option label="地址" value="2"></el-option>
                                <el-option label="日期" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="search"></el-button>
                        </el-input>

                    </el-col>

                    <!-- 更多选项 -->
                    <el-col :span="4">

                        <el-dropdown  class="option-more" @command="showSearchPanel">
                    <span class="el-dropdown-link">
                        更多<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="refresh">刷新</el-dropdown-item>
                                <el-dropdown-item command="search">查询框</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>

                    </el-col>


                </el-row>

                <div v-show="searchPanelFlag" class="search-panel">

                    <el-row>

                        <el-form :inline="true">
                            <el-form-item>
                                <el-input placeholder="姓名" size="small"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="地址" size="small"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="日期" size="small"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="default" size="small">查询</el-button>
                                <el-button type="text" size="small" @click="closeSearchPanel">
                                    收起 <i class="el-icon-caret-top"></i>
                                </el-button>
                            </el-form-item>
                        </el-form>

                    </el-row>

                </div>


            </div>

            <!-- 表格 -->
            <div class="main-content-table">

                <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">

                    <el-table-column type="selection" width="55"></el-table-column>

                    <el-table-column type="index" width="50"></el-table-column>

                    <el-table-column prop="name" label="姓名" width="180"></el-table-column>

                    <el-table-column prop="address" label="地址"></el-table-column>

                    <el-table-column prop="date" label="日期" width="180"></el-table-column>

                    <el-table-column label="操作" width="120">
                        <template scope="scope">
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </div>

            <!-- 分页 -->
            <div class="main-content-page">
                <el-pagination :page-size="10" layout="total, prev, pager, next" :total="87"></el-pagination>
            </div>
        </el-card>

    </section>
</template>

<script>


    export default {
        data() {
            return {
                selectedData: "",
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }],
                searchPanelFlag: false
            }
        },
        methods: {
            showSearchPanel (value) {
                if(value == "refresh") {
                    this.searchPanelFlag = false;
                }
                if(value == "search") {
                    this.searchPanelFlag = !this.searchPanelFlag;
                }
            },
            handleSelectionChange (val) {
                if(val.length == 0) {
                    this.selectedData = "";
                } else {
                    this.selectedData = val;
                }
            },
            closeSearchPanel() {
                this.searchPanelFlag = false;
            },
            del () {
                console.log(this.selectedData);
            }
        },
        created () {
            this.$root.title = '广告供应商';
            this.$root.subTitle = '列表';
        }
    }

</script>

<style>

    /* 主体内容 */
    .main-content {
        /*margin: 32px 22px;*/
        /*padding: 20px;*/
        /*box-shadow: 0 10px 20px 0 rgba(7, 17, 27, .1);*/
        /*border-radius: 4px;*/

    }

    /* 操作面板 */
    .option-panel {
        margin-bottom: 20px;
    }

    /* 更多按钮 */
    .option-more {
        float: right;
    }

    /* 查询面板 */
    .search-panel {
        margin-top: 16px
    }

    /* 分页 */
    .main-content-page {
        margin-top: 12px;
        text-align: right;
    }

    .el-select {
        width: 100px;
    }

    .searchPanelFlag .el-input {
        width: 100px !important;
    }

    .el-form-item {
        margin-bottom: 0px !important;
    }

</style>