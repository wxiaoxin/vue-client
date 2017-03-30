<template>

	<section class="table-panel">

		<el-card>

			<div class="tab-header-title">
				<!-- 广告供应商名称 -->
				<h2>{{supplierName}}</h2>
			</div>

			<el-tabs v-model="activePane"
					 @tab-click="handleTabsClick">

				<!-- 站点面板 -->
				<el-tab-pane label="站点" name="site">

					<div class="option-panel">

						<el-row>
							<el-col :lg="2" :md="2" :sm="3" :xs="3">
								<el-button size="small" type="primary">新建网站</el-button>
							</el-col>

							<el-col :lg="22" :md="22" :sm="21" :xs="21">

								<div style="float: right;">

									<el-select v-model="siteSearchData.status" placeholder="状态" size="small"
											   class="el-select-78">
										<el-option label="全部" value="0"></el-option>
										<el-option label="有效" value="1"></el-option>
										<el-option label="无效" value="2"></el-option>
									</el-select>

									<el-select v-model="siteSearchData.type" placeholder="类型" size="small"
											   class="el-select-78">
										<el-option label="全部" value="0"></el-option>
										<el-option label="PC" value="1"></el-option>
										<el-option label="移动" value="2"></el-option>
									</el-select>

									<el-input v-model="siteSearchData.value" placeholder="网站ID、网站名称" size="small"
											  class="el-input-200"></el-input>

									<el-button type="default" size="small" @click="siteSearch">搜索</el-button>

									<el-button type="default" size="small" @click="siteReset">重置</el-button>

								</div>

							</el-col>
						</el-row>

					</div>

					<div class="main-content-table">

						<el-table :data="siteData" border>

							<el-table-column prop="siteId" label="ID" min-width="80" align="center"></el-table-column>

							<el-table-column prop="siteName" label="站点名称" align="center"
											 min-width="200"></el-table-column>

							<el-table-column prop="siteUrl" label="站点地址" align="center" min-width="200">
								<template scope="scope">
									<a :href="scope.row.siteUrl" class="column-link">{{scope.row.siteUrl}}</a>
								</template>
							</el-table-column>

							<el-table-column label="状态" align="center">
								<template scope="scope">
									{{parseSiteStatus(scope.row.siteStatus)}}
								</template>
							</el-table-column>

							<el-table-column prop="siteType" label="类型" align="center"></el-table-column>

							<el-table-column prop="siteAdSpaceNumber" label="广告位" align="center"></el-table-column>

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

				</el-tab-pane>

				<!-- 应用面板 -->
				<el-tab-pane label="应用" name="app">

					<div class="option-panel">

						<el-row>
							<el-col :lg="2" :md="2" :sm="3" :xs="3">
								<el-button size="small" type="primary">新建应用</el-button>
							</el-col>

							<el-col :lg="22" :md="22" :sm="21" :xs="21">

								<div style="float: right;">

									<el-select v-model="appSearchData.status" placeholder="应用状态" size="small"
											   class="el-select-100">
										<el-option label="全部" value="0"></el-option>
										<el-option label="有效" value="1"></el-option>
										<el-option label="无效" value="2"></el-option>
									</el-select>

									<el-input v-model="appSearchData.value" placeholder="应用ID、应用名称" size="small"
											  class="el-input-200"></el-input>

									<el-button type="default" size="small" @click="appSearch">搜索</el-button>

									<el-button type="default" size="small" @click="appReset">重置</el-button>

								</div>

							</el-col>
						</el-row>

					</div>

					<div class="main-content-table">

						<el-table :data="appData" border>

							<el-table-column prop="appId" label="ID" min-width="80" align="center"></el-table-column>

							<el-table-column prop="appName" label="应用名称" align="center"
											 min-width="200"></el-table-column>

							<el-table-column prop="appUrl" label="应用地址" align="center" min-width="200">
								<template scope="scope">
									<a :href="scope.row.appUrl" class="column-link">{{scope.row.appUrl}}</a>
								</template>
							</el-table-column>

							<el-table-column label="状态" align="center">
								<template scope="scope">
									{{scope.row.appStatus}}
								</template>
							</el-table-column>

							<el-table-column prop="appType" label="类型" align="center"></el-table-column>

							<el-table-column prop="appAdSpaceNumber" label="广告位" align="center"></el-table-column>

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

				</el-tab-pane>

				<!-- 广告位面板 -->
				<el-tab-pane label="广告位" name="adspace">

					<div class="option-panel">

						<el-row>
							<el-col :lg="2" :md="2" :sm="3" :xs="3">
								<el-button size="small" type="primary">新建广告位</el-button>
							</el-col>

							<el-col :lg="22" :md="24" :sm="21">

								<div style="float: right;">

									<el-select v-model="adSpaceSearchData.status" placeholder="状态" size="small" class="el-select-100">
										<el-option label="全部" value="0"></el-option>
										<el-option label="有效" value="1"></el-option>
										<el-option label="无效" value="2"></el-option>
									</el-select>

									<el-select v-model="adSpaceSearchData.type" placeholder="类型" size="small" class="el-select-100">
										<el-option label="全部" value="0"></el-option>
										<el-option label="PC" value="1"></el-option>
										<el-option label="WAP" value="2"></el-option>
										<el-option label="APP" value="3"></el-option>
									</el-select>

									<el-select v-model="adSpaceSearchData.format" placeholder="形式" size="small" class="el-select-100">
										<el-option label="全部" value="0"></el-option>
										<el-option label="PC-固定" value="1"></el-option>
										<el-option label="PC-浮层" value="2"></el-option>
										<el-option label="PC-视频前贴" value="3"></el-option>
										<el-option label="PC-视频暂停" value="4"></el-option>
										<el-option label="PC-图文" value="5"></el-option>
										<el-option label="WAP-通栏" value="6"></el-option>
										<el-option label="WAP-视频前贴" value="7"></el-option>
										<el-option label="WAP-视频暂停" value="8"></el-option>
										<el-option label="WAP-信息流" value="9"></el-option>
										<el-option label="WAP-图文" value="10"></el-option>
										<el-option label="APP-通栏" value="11"></el-option>
										<el-option label="APP-开屏" value="12"></el-option>
										<el-option label="APP-插屏" value="13"></el-option>
										<el-option label="APP-视频贴片" value="14"></el-option>
										<el-option label="APP-视频暂停" value="15"></el-option>
										<el-option label="APP-焦点图" value="16"></el-option>
										<el-option label="APP-信息流" value="17"></el-option>
										<el-option label="APP-图文" value="18"></el-option>
									</el-select>

									<el-select v-model="adSpaceSearchData.useStatus" placeholder="投放" size="small" class="el-select-100">
										<el-option label="全部" value="0"></el-option>
										<el-option label="有投放" value="1"></el-option>
										<el-option label="无投放" value="2"></el-option>
									</el-select>

									<el-input v-model="appSearchData.value" placeholder="广告位ID、名称" size="small" class="el-input-200">
									</el-input>

									<el-button type="default" size="small" @click="adSpaceSearch">搜索</el-button>

									<el-button type="default" size="small" @click="adSpaceReset">重置</el-button>

								</div>

							</el-col>
						</el-row>

					</div>

					<div class="main-content-table">

						<el-table :data="adSpaceData" border>

							<el-table-column prop="adSpaceId" label="ID" min-width="80" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceName" label="名称" align="center" min-width="200">
							</el-table-column>

							<el-table-column prop="adSpaceOwner" label="网站/应用" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceStatus" label="状态" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceSize" label="尺寸" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceType" label="类型" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceFormat" label="形式" align="center">
							</el-table-column>

							<el-table-column prop="adSpaceUseStatus" label="投放状态" align="center">
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

				</el-tab-pane>

			</el-tabs>

		</el-card>

	</section>


</template>

<script>

	import supplierUtils from "../supplier";

	export default {
		data() {
			return {
				// 当前活动面板
				activePane: "",
				// 供应商主键id
				supplierId: 0,
				// 供应商名称
				supplierName: "",
				// 网站数据
				siteData: [],
				// 应用标签页
				appData: [],
				// 广告位标签页
				adSpaceData: [],
				// 分页
				page: {
					pageNum: 1,
					pageSize: 10,
					total: 0
				},
				// 网站标签页搜索数据
				siteSearchData: {
					status: "",
					type: "",
					value: ""
				},
				// 应用标签页搜索数据
				appSearchData: {
					status: "",
					value: ""
				},
				// 广告位标签页搜索数据
				adSpaceSearchData: {
					status: "",
					type: "",
					format: "",
					size: "",
					useStatus: ""
				}
			}
		},
		methods: {
			// 监听改变标签页事件处理器
			handleTabsClick() {
				this.page.pageNum = 1;
				this.page.pageSize = 10;
				this.page.total = 0;
				this.refreshData();
			},

			// 监听网站当前页码改变事件处理器
			handleCurrentChange(pageNum) {
				this.page.pageNum = pageNum;
				this.refreshData();
			},
			// 监听网站分页大小改变事件处理器
			handleSizeChange(pageSize) {
				this.page.pageSize = pageSize;
				this.refreshData();
			},
			// 网站标签页搜索
			siteSearch() {
				// TODO 网站标签页搜索
				console.log(this.siteSearchData);
			},
			// 网站标签页重置
			siteReset() {
				this.siteSearchData.status = "0";
				this.siteSearchData.type = "0";
				this.siteSearchData.value = "";
			},
			// 应用标签页搜索
			appSearch() {
				// TODO 应用标签页搜索
				console.log(this.appSearchData);
			},
			// 应用标签页重置
			appReset() {
				this.appSearchData.status = "0";
				this.appSearchData.value = "";
			},
			// 广告位标签页搜索
			adSpaceSearch() {
				// TODO 广告位标签页搜索
				console.log("广告位标签页搜索");
			},
			// 广告位标签页重置
			adSpaceReset() {
				// TODO 广告位标签页重置
				console.log("广告位标签页重置");
			},
			parseSiteStatus: supplierUtils.parseSiteStatus,
			refreshData () {
				if (this.activePane == "site") {
					this.$http.get("/site/data", {
						params: {
							pageNum: this.page.pageNum,
							pageSize: this.page.pageSize
						}
					}).then((response) => {
						this.siteData = response.data.data;
						this.page.total = response.data.total;
					}, (error) => {
						this.$message({
							type: "error",
							message: "请求失败，稍后重试"
						});
					});
				}
				if (this.activePane == "app") {
					this.$http.get("/app/data", {
						params: {
							pageNumber: this.page.pageNum,
							pageSize: this.page.pageSize
						}
					}).then((response) => {
						this.appData = response.data.data;
						this.page.total = response.data.total;
					}, (error) => {
						this.$message({
							type: "error",
							message: "APP列表数据请求失败，稍后重试"
						});
					});
				}
				if (this.activePane == "adspace") {
					this.$http.get("/adspace/data", {
						params: {
							pageNumber: this.page.pageNum,
							pageSize: this.page.pageSize
						}
					}).then((response) => {
						this.adSpaceData = response.data.data;
						this.page.total = response.data.total;
					}, (error) => {
						this.$message({
							type: "error",
							message: "AdSpace列表数据请求失败，稍后重试"
						});
					});
				}
			}
		},
		watch: {
			// 监听路由参数改变
			"$route" (to, from) {
				this.supplierId = to.params.supplierId;
				this.supplierName = to.query.supplierName;
				this.activePane = to.query.activePane;
			}
		},
		created () {
			this.$root.title = "广告供应商站点";
			this.$root.subTitle = "列表";
			// 获取传入的供应商主键
			this.supplierId = this.$route.params.supplierId;
			// 获取传入的供应商名称
			this.supplierName = this.$route.query.supplierName;
			// 获取传入的标签页名称
			this.activePane = this.$route.query.activePane;
			this.refreshData();
		}
	}


</script>
