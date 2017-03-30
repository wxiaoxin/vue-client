import Mock from "mockjs"

/**
 * 广告供应商 - 站点列表
 */
Mock.mock(/http:\/\/localhost:8888\/site\/data\?/, "get", function (options) {
	console.log(options.url);
	return Mock.mock({
		"data|5-10": [
			{
				"siteId|+1": 1,
				"siteName": "@ctitle(4,10)",
				"siteUrl": "@url",
				"siteStatus|1-2": 1,
				"siteType|1": ["有效", "无效"],
				"siteAdSpaceNumber|0-20": 1,
			}
		],
		"total": 34
	});
});

/**
 * 广告供应商 - 应用列表
 */
Mock.mock(/http:\/\/localhost:8888\/app\/data\?/, "get", (options) => {
	console.log(options.url);
	return Mock.mock({
		"data|5-10": [
			{
				"appId|+1": 1,
				"appName" : "@ctitle(4, 10)",
				"appUrl" : "@url",
				"appStatus|1": ["有效", "无效"],
				"appAdSpaceNumber|0-20": 1
			}
		],
		"total": 34
	});
});

/**
 * 广告供应商 - 广告位
 */
Mock.mock(/http:\/\/localhost:8888\/adspace\/data\?/, "get", (option) => {
	return Mock.mock({
		"data|5-10": [
			{
				"adSpaceId|+1": 1,
				"adSpaceName": "@ctitle(4, 10)",
				"adSpaceOwner|1": ["百度", "百度浏览器"],
				"adSpaceStatus|1": ["有效", "无效"],
				"adSpaceSize|1": ["300*250","640*100","640*200"],
				"adSpaceType|1": ["PC", "WAP", "APP"],
				"adSpaceFormat": ["浮层", "通栏", "插屏", "全屏"],
				"adSpaceUseStatus|1-10": 0
			}
		],
		"total": 34
	})
});