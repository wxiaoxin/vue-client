<template>
    <section class="table-panel">
        <el-card>
            <!-- 操作面板 -->
            <div class="option-panel">

                <el-row>

                    <!-- 快捷操作 -->
                    <el-col :lg="4" :ms="4" :sm="4" :xs="4">

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
                                   @click="handleBatchDelete"
                                   :disabled="selectedData == ''"></el-button>

                    </el-col>

                    <!-- 搜索框 -->
                    <el-col :lg="{span:12, offset:6, push:2}" :md="{span:15, offset:5}" :sm="{span:20}" :xs="20">

                        <div style="float: right">

                            <el-input v-model="searchData.value" placeholder="请输入内容" size="small" style="width: 320px">
                                <el-select v-model="searchData.type" slot="prepend" placeholder="请选择" style="width: 100px;">
                                    <el-option label="ID" value="1"></el-option>
                                    <el-option label="名称" value="2"></el-option>
                                    <el-option label="宏参数" value="3"></el-option>
                                </el-select>
                                <el-button slot="append" icon="search" @click="handleSearch"></el-button>
                            </el-input>

                            <el-dropdown class="option-more" @command="showSearchForm" style="margin-left: 64px">
                                <span class="el-dropdown-link">
                                    更多<i class="el-icon-caret-bottom el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="refresh">刷新</el-dropdown-item>
                                    <el-dropdown-item command="search">查询框</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>

                        </div>


                    </el-col>

                    <!-- 更多选项
                    <el-col :lg="2" :md="2" :sm="3" :xs="2" style="float: right">


                    </el-col> -->

                </el-row>

                <div v-show="searchFormFlag" class="search-form">

                    <el-row>

                        <el-form :inline="true">
                            <el-form-item>
                                <el-input v-model="searchFormItem.name" placeholder="名称" size="small"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-date-picker v-model="searchFormItem.createTime" type="date" placeholder="时间"
                                                size="small"></el-date-picker>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="searchFormItem.sysType" placeholder="宏类型" size="small">
                                    <el-option value="1" label="系统"></el-option>
                                    <el-option value="2" label="可编辑"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="searchFormItem.useType" placeholder="应用类型" size="small">
                                    <el-option value="1" label="广告位"></el-option>
                                    <el-option value="2" label="策略"></el-option>
                                    <el-option value="3" label="创意"></el-option>
                                    <el-option value="4" label="物料"></el-option>
                                    <el-option value="5" label="动作"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="searchFormItem.dataType" placeholder="元素格式" size="small">
                                    <el-option value="1" label="文本"></el-option>
                                    <el-option value="2" label="数字"></el-option>
                                    <el-option value="3" label="url"></el-option>
                                    <el-option value="4" label="url列表"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="searchFormItem.editType" placeholder="编辑类型" size="small">
                                    <el-option value="1" label="填写"></el-option>
                                    <el-option value="2" label="上传"></el-option>
                                    <el-option value="3" label="填写+上传"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="default" size="small" @click="handleMultiSearch">查询</el-button>
                                <el-button type="default" size="small" @click="handleReset">重置</el-button>
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

                <el-table :data="data" style="width: 100%" @selection-change="handleSelectionChange" :border="true">

                    <el-table-column type="selection" width="55" ></el-table-column>

                    <el-table-column prop="id" width="120" label="ID" fixed="left"></el-table-column>

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

                    <el-table-column label="操作" width="150" fixed="right">
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
                <el-pagination
                        layout="sizes, total, prev, pager, next"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange"
                        :page-sizes="[10, 15, 20]"
                        :page-size="page.pageSize"
                        :total="page.total"></el-pagination>
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
                searchFormFlag: false,
                searchData: {
                    type: "",
                    value: ""
                },
                page: {
                    pageNum: 1,
                    pageSize: 10,
                    pages: 0,
                    total: 0
                },
                searchFormItem: {
                    id: "",
                    name: "",
                    macro: "",
                    createTime: "",
                    sysType: "",
                    useType: "",
                    dataType: "",
                    editType: ""
                }
            }
        },
        methods: {
            // 显示查询面板
            showSearchForm (value) {
                if (value == "refresh") {
                    this.searchFormFlag = false;
                    this.refresh();
                }
                if (value == "search") {
                    this.searchFormFlag = !this.searchFormFlag;
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
                this.searchFormFlag = false;
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
                    this.$http.get("/macros/delete/" + id)
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
                }).catch(() => {
                });
            },
            // 批量删除
            handleBatchDelete () {
                let ids = "";
                for (let i = 0; i < this.selectedData.length; i++) {
                    ids += this.selectedData[i].id;
                    ids += ",";
                }
                this.$http.get("/macros/bdel", {
                    params: {
                        id: ids.substr(0, ids.length - 1)
                    }
                }).then((response) => {
                    this.$message({
                        type: "success",
                        message: "删除成功"
                    });
                    this.refresh();
                }, (response) => {
                   this.$message({
                       type: "error",
                       message: "批量删除失败，稍后重试"
                   });
                });
            },
            // 编辑
            edit(id) {
                console.log(id);
            },
            // 单条件查询
            handleSearch () {
                if (this.searchData.type == 1) {
                    // ID
                    this.$http.get("/macros/get/" + this.searchData.value)
                        .then((response) => {
                            if (response.data == "") {
                                this.$message({
                                    type: "info",
                                    message: "没有查询到数据"
                                })
                            } else {
                                this.page.pageNum = 1;
                                this.page.pageSize = 10;
                                this.page.pages = 1;
                                this.page.total = 1;
                                this.data = new Array(response.data);
                            }
                        }, (response) => {
                            this.$message({
                                type: "error",
                                message: "请求失败，稍后重试"
                            })
                        });
                } else {
                    if (this.searchData.type == 2) {
                        this.searchFormItem.name = this.searchData.value;
                    }
                    if (this.searchData.type == 3) {
                        this.searchFormItem.macro = this.searchData.value;
                    }
                    this.$http.get("/macros/query", {
                        params: this.searchFormItem
                    }).then((response) => {
                        this.data = response.data.data;
                        this.page.pageNum = response.data.pageNum;
                        this.page.pageSize = response.data.pageSize;
                        this.page.pages = response.data.pages;
                        this.page.total = response.data.total;
                    }, (response) => {
                        this.$message({
                            type: "error",
                            message: "数据加载失败，稍后重试"
                        })
                    });
                }
            },
            // 复合条件查询
            handleMultiSearch () {
                this.$http.get("/macros/query", {
                    params: this.searchFormItem
                }).then((response) => {
                    this.data = response.data.data;
                    this.page.pageNum = response.data.pageNum;
                    this.page.pageSize = response.data.pageSize;
                    this.page.pages = response.data.pages;
                    this.page.total = response.data.total;
                }, (response) => {
                    this.$message({
                        type: "error",
                        message: "数据加载失败，稍后重试"
                    })
                });
            },
            // 重置
            handleReset () {
                this.searchData.type = "";
                this.searchData.value = "";
                for (let name in this.searchFormItem) {
                    this.searchFormItem[name] = "";
                }
            },
            // 刷新数据
            refresh () {
                this.$http.get("/macros/all", {
                    params: {
                        pageNum: this.page.pageNum,
                        pageSize: this.page.pageSize
                    }
                }).then((response) => {
                    this.data = response.data.data;
                    this.page.pageNum = response.data.pageNum;
                    this.page.pageSize = response.data.pageSize;
                    this.page.pages = response.data.pages;
                    this.page.total = response.data.total;
                }, (response) => {
                    this.$message({
                        type: "error",
                        message: "数据加载失败，稍后重试"
                    })
                });
            },
            // 监听页面记录大小改变事件
            handleSizeChange (value) {
                console.log(value);
                this.page.pageSize = value;
                this.refresh();
            },
            // 监听当前页码改变事件
            handleCurrentChange (value) {
                console.log(value);
                this.page.pageNum = value;
                this.refresh();
            },
            parseSysType: common.parseSysType,
            parseUseType: common.parseUseType,
            parseDataType: common.parseDataType,
            parseEditType: common.parseEditType,
            parseDate: common.parseDate
        },
        created () {
            this.$root.title = '广告供应商';
            this.$root.subTitle = '列表';
            this.refresh();
        }
    }

</script>