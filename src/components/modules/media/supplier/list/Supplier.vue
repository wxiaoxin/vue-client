<template>
    <section class="table-panel">
        <el-card>
            <!-- 操作面板 -->
            <div class="option-panel">

                <el-row>

                    <!-- 快捷操作 -->
                    <el-col :span="3">

                        <!-- 新增 -->
                        <el-button type="primary" size="small" title="新增">
                            <router-link to="/supplier/new">
                                <i class="el-icon-plus" style="color: #fff"></i>
                            </router-link>
                        </el-button>

                        <!-- 删除 -->
                        <el-button type="danger"
                                   icon="delete"
                                   size="small"
                                   title="批量删除"
                                   @click="batchDel"
                                   :disabled="selectedData == ''"></el-button>

                    </el-col>

                    <!-- 搜索框 -->
                    <el-col :span="8" :offset="9">

                        <el-input v-model="searchData.value" placeholder="请输入内容" size="small">
                            <el-select v-model="searchData.type" slot="prepend" placeholder="请选择">
                                <el-option label="ID" value="1"></el-option>
                                <el-option label="名称" value="2"></el-option>
                                <el-option label="宏参数" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="search" @click="searchHandler"></el-button>
                        </el-input>

                    </el-col>

                    <!-- 更多选项 -->
                    <el-col :span="4">

                        <el-dropdown class="option-more" @command="showSearchPanel">
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
                                <el-input placeholder="ID" size="small"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-input placeholder="名称" size="small"></el-input>
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

                <el-table :data="data" style="width: 100%" @selection-change="handleSelectionChange">

                    <el-table-column type="selection" width="55"></el-table-column>

                    <el-table-column prop="id" width="120" label="ID"></el-table-column>

                    <el-table-column prop="name" label="名称" width="100"></el-table-column>

                    <el-table-column prop="macro" label="宏参数" width="180"></el-table-column>

                    <el-table-column label="宏类型">
                        <template scope="scope">
                            <span>{{parseSysType(scope.row.sysType)}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column prop="useType" label="应用类型">
                        <template scope="scope">
                            <span>{{parseUseType(scope.row.useType)}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="元素格式">
                        <template scope="scope">
                            <span>{{parseDataType(scope.row.dataType)}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="编辑方式">
                        <template scope="scope">
                            <span>{{parseEditType(scope.row.editType)}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="日期" width="260">
                        <template scope="scope">
                            <span>{{parseDate(scope.row.lastChanged)}}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" width="150">
                        <template scope="scope">
                            <el-button type="primary" :plain="true" size="small" @click="edit(scope.row.id)">编辑
                            </el-button>
                            <el-button type="danger" :plain="true" size="small" @click="del(scope.row.id)">删除
                            </el-button>
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

    import common from "../supplier.js"

    export default {
        data() {
            return {
                selectedData: "",
                data: [],
                searchPanelFlag: false,
                searchData: {
                    type: "",
                    value: ""
                },
                page: {
                    pageNum: 1,
                    pageSize: 10
                }
            }
        },
        methods: {
            // 显示查询面板
            showSearchPanel (value) {
                if (value == "refresh") {
                    this.searchPanelFlag = false;
                    this.refresh();
                }
                if (value == "search") {
                    this.searchPanelFlag = !this.searchPanelFlag;
                }
            },
            // 下拉框选择改变事件监听器
            handleSelectionChange (val) {
                if (val.length == 0) {
                    this.selectedData = "";
                } else {
                    this.selectedData = val;
                }
            },
            // 收起查询面板
            closeSearchPanel() {
                this.searchPanelFlag = false;
            },
            // 批量删除
            batchDel () {
                console.log(this.selectedData);
            },
            // 删除
            del (id) {
                this.$confirm("此操作将永久删除数据，是否继续？", "提示", {
                    cancelButtonText: "取消",
                    confirmButtonText: "是的",
                    type: "warning"
                }).then(() => {
                    this.$http.get("http://localhost:8888/macros/delete/" + id)
                        .then((response) => {
                            this.$message({
                                type: "success",
                                message: "删除成功"
                            });
                            this.refresh();
                        }, (response) => {
                            this.$message({
                                type: "error",
                                message: "删除失败，稍后重试"
                            })
                        });
                }).catch(() => {});
            },
            // 编辑
            edit(id) {
                console.log(id);
            },
            // 单条件查询
            searchHandler () {
                if (this.searchData.type == 1) {
                    // ID
                    this.$http.get("http://localhost:8888/macros/get/" + this.searchData.value)
                        .then((response) => {
                            if (response.data == "") {
                                this.$message({
                                    type: "info",
                                    message: "没有查询到数据"
                                })
                            } else {
                                this.data = new Array(response.data);
                            }
                        }, (response) => {
                            this.$message({
                                type: "error",
                                message: "请求失败，稍后重试"
                            })
                        });
                } else {
                    this.$message({
                        type: "info",
                        message: "请选择查询条件并填写值"
                    })
                }
            },
            parseSysType: common.parseSysType,
            parseUseType: common.parseUseType,
            parseDataType: common.parseDataType,
            parseEditType: common.parseEditType,
            parseDate: common.parseDate,
            // 刷新数据
            refresh () {
                this.$http.get("http://localhost:8888/macros/all", {
                    params: {
                        pageNum: this.page.pageNum,
                        pageSize: this.page.pageSize
                    }
                }).then((response) => {
                    this.data = response.data;
                }, (response) => {
                    this.$message({
                        type: "error",
                        message: "数据加载失败，稍后重试"
                    })
                });
            }
        },
        created () {
            this.$root.title = '广告供应商';
            this.$root.subTitle = '列表';
            this.refresh();
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
        margin-top: 24px;
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