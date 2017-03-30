<template>

    <section class="table-panel">

        <el-card>

            <div class="option-panel">

                <el-row>

                    <el-col :lg="4" :ms="4" :sm="4" :xs="4">

                        <router-link to="/supplier/edit">
                            <el-button type="primary" size="small">新增供应商</el-button>
                        </router-link>

                    </el-col>

                    <el-col :lg="{span:12, offset:6, push:2}" :md="{span:15, offset:5}" :sm="{span:20}" :xs=20>

                        <div style="float: right">

                            <el-input v-model="searchData.value"
                                      @keyup.enter.native="handleEnter"
                                      placeholder="输值，回车"
                                      size="small" style="width: 320px;">
                                <el-select v-model="searchData.type" slot="prepend" class="el-select-78"
                                           placeholder="请选择">
                                    <el-option label="ID" value="1"></el-option>
                                    <el-option label="名称" value="2"></el-option>
                                </el-select>
                            </el-input>

                        </div>

                    </el-col>

                </el-row>

            </div>


            <!--表格-->
            <div class="main-content-table">

                <el-table :data="data"
                          highlight-current-row
                          border>

                    <el-table-column sortable
                                     prop="supplierId"
                                     label="ID"
                                     min-width="80"
                                     align="center">
                    </el-table-column>

                    <el-table-column label="名称" align="center">
                        <template scope="scope">
                            <router-link v-bind:to="getEditUrl(scope.row.supplierId)" class="column-link">{{scope.row.supplierName}}</router-link>
                        </template>
                    </el-table-column>

                    <el-table-column label="有效网站" align="center">
                        <template scope="scope">
                            <router-link v-bind:to="getSiteUrl(scope.row.supplierId, scope.row.supplierName)" class="column-link">{{scope.row.siteNumber}}</router-link>
                        </template>
                    </el-table-column>

                    <el-table-column label="有效应用" align="center">
                        <template scope="scope">
                            <router-link v-bind:to="getAppUrl(scope.row.supplierId, scope.row.supplierName)" class="column-link">{{scope.row.appNumber}}</router-link>
                        </template>
                    </el-table-column>

                    <el-table-column prop="adSpaceNumber" label="有效广告位" align="center">
                        <template scope="scope">
                            <router-link v-bind:to="getAdSpaceUrl(scope.row.supplierId, scope.row.supplierName)" class="column-link">{{scope.row.adSpaceNumber}}</router-link>
                        </template>
                    </el-table-column>

                </el-table>

            </div>

            <div class="main-content-page">

                <el-pagination layout="sizes, total, prev, pager, next"
                               @current-change="handleCurrentChange"
                               @size-change="handleSizeChange"
                               :page-sizes="[10, 15, 20]"
                               :page-size="page.pageSize"
                               :total="page.total">

                </el-pagination>

            </div>

        </el-card>

    </section>

</template>

<script>


    export default {
        data() {
            return {
                // 表格选中项
                // selectedData: "",
                // 网站状态
                // siteStatus: "",
                // 站点类型
                // siteType: "",
                // 查询数据，类型和值
                searchData: {
                    type: "1",
                    value: ""
                },
                // 表格数据
                data: [
					{
					    "supplierId": 1,
						"supplierName": '测试名称',
						'siteNumber': 3,
						'appNumber': 5,
						'adSpaceNumber': 8
					}
				],
                // 分页数据
                page: {
                    pageNum: 1,
                    pageSize: 10,
                    pages: 0,
                    total: 0
                }
            }
        },
        methods: {
            // 监听页码改变事件处理器
            handleCurrentChange (value) {
                this.page.pageNum = value;
                this.refresh();
            },
            // 监听页面记录大小改变事件处理器
            handleSizeChange (value) {
                this.page.pageSize = value;
                this.refresh();
            },
            handleEnter () {
                this.refresh();
            },
            handleEdit (supplierId) {
                window.location.href = "/#/supplier/edit/" + supplierId;
            },
            // 构造站点链接地址
            getSiteUrl(supplierId, supplierName) {
                return "/supplier/detail/" + supplierId + "?supplierName=" + supplierName + "&activePane=site";
            },
            // 构造应用链接地址
            getAppUrl(supplierId, supplierName) {
                return "/supplier/detail/" + supplierId + "?supplierName=" + supplierName + "&activePane=app";
            },
            // 构造广告位链接地址
            getAdSpaceUrl(supplierId, supplierName) {
                return "/supplier/detail/" + supplierId + "?supplierName=" + supplierName + "&activePane=adspace";
            },
            // 构造编辑广告供应商链接地址
            getEditUrl (supplierId) {
                return "/supplier/edit/" + supplierId;
            },
            // 刷新数据
            refresh (){
                let params = {
                    pageNum: this.page.pageNum,
                    pageSize: this.page.pageSize,
                };
                if (this.searchData.type == 1) {
                    params.id = this.searchData.value;
                    params.name = "";
                }
                if (this.searchData.type == 2) {
                    params.name = this.searchData.value;
                    params.id = "";
                }
                this.$http.get("/supplier/all", {
                    params: params
                }).then((response) => {
                    this.data = response.data.data;
                    this.page.pages = response.data.pages;
                    this.page.total = response.data.total;
                }, (response) => {
                    console.log(response);
                });
            }
        },
        created () {
            this.$root.title = "广告供应商";
            this.$root.subTitle = "列表";
//            this.refresh();
        }

    }

</script>
