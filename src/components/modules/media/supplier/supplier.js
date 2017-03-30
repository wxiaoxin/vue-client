/**
 * Created by King on 2017/3/20.
 */

// 解析网站状态
const supplierUtils = {
	parseSiteStatus(status) {
		if (status == 1) {
			return "有效";
		} else {
			return "失效";
		}
	}
};

export default supplierUtils