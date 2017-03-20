/**
 * 供应商模板公共函数
 */

const common = {

    /**
     * 解析宏类型
     */
    parseSysType (value) {
        if (value == 1) {
            return "系统";
        }
        if (value == 2) {
            return "可编辑";
        }
    },

    /**
     * 解析宏应用类型
     */
    parseUseType (value) {
        if (value == 1) {
            return "广告位";
        }
        if (value == 2) {
            return "策略";
        }
        if (value == 3) {
            return "创意";
        }
        if (value == 4) {
            return "物料";
        }
        if (value == 5) {
            return "动作";
        } else {
            return "未知";
        }
    },

    /**
     * 解析元素格式类型
     */
    parseDataType (value) {
        if (value == 1) {
            return "文本";
        }
        if (value == 2) {
            return "数字";
        }
        if (value == 3) {
            return "url";
        }
        if (value == 4) {
            return "url列表";
        } else {
            return "未知";
        }
    },

    /**
     * 解析编辑类型
     */
    parseEditType (value) {
        if (value == 1) {
            return "填写";
        }
        if (value == 2) {
            return "上传";
        }
        if (value == 3) {
            return "填写+上传";
        } else {
            return "未知";
        }
    },

    /**
     * 解析日期
     */
    parseDate (value) {
        let date = new Date(value);
        return date.toLocaleString();
    }

};

export default common;
