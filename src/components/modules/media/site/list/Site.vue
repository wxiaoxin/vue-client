<template>

    <section class="table-panel">

        <el-card>

            <h2>{{supplierName}}</h2>

            <div class="option-panel">



            </div>

            <div class="main-content-page">

                <el-tabs v-model="activePane" type="card" @tab-click="handleTagsClick">

                    <el-tab-pane label="站点" name="site">

                        站点

                    </el-tab-pane>

                    <el-tab-pane label="应用" name="app">

                        应用

                    </el-tab-pane>

                    <el-tab-pane label="广告位" name="adspace">

                        广告位

                    </el-tab-pane>

                </el-tabs>

           </div>


        </el-card>

    </section>


</template>

<script>

    export default {
        data() {
            return {
                supplierId: 0,
                supplierName: "",
                activePane: "site",
                page: {
                    pageNum: 1,
                    pageSize: 10
                },
                siteData: [],
                appData: [],
                adspaceData: []
            }
        },
        methods: {
            handleTagsClick() {
                // TODO
                console.log(this.activePane);
            },
            refreshData () {
                if(this.activePane == "site") {
                    this.$http.get("/site/query2", {
                        params: {
                            supplierId: this.supplierId,
                            pageNum: this.page.pageNum,
                            pageSize: this.page.pageSize
                        }
                    }).then((response) => {
                        // TODO
                    }, (error) => {
                        this.$message({
                            type: "error",
                            message: "请求失败，稍后重试"
                        })
                    });
                }
                if (this.activePane == "app") {

                }
                if (this.activePane = "adspace") {

                }

            }
        },
        watch: {
            "$route" (to, from) {
                this.supplierId = to.params.supplierId;
                this.supplierName = to.query.supplierName;
            }
        },
        created () {
            this.$root.title = "广告供应商站点";
            this.$root.subTitle = "列表";
            this.supplierId = this.$route.params.supplierId;
            this.supplierName = this.$route.query.supplierName;
            this.activePane = this.$route.query.activePane;
            this.refreshData();
        }
    }


</script>