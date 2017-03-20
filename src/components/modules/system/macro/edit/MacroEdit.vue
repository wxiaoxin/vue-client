<template>
    <section class="edit-panel">
        <el-card>

            <el-form ref="macroForm"
                     :rules="rules"
                     :model="form"
                     label-width="100px"
                     label-position="right">

                <el-input v-model="form.id" v-show="false"></el-input>

                <el-form-item label="元素名称" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="元素代码" prop="macro">
                    <el-input type="textarea" v-model="form.macro"></el-input>
                </el-form-item>

                <el-form-item label="元素类型" prop="sysType">
                    <el-select v-model="form.sysType">
                        <el-option label="系统类型" value="1"></el-option>
                        <el-option label="可编辑类型" value="2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="范围类型" prop="useType">
                    <el-select v-model="form.useType">
                        <el-option label="广告位元素" value="1"></el-option>
                        <el-option label="策略元素" value="2"></el-option>
                        <el-option label="创意元素" value="3"></el-option>
                        <el-option label="物料元素" value="4"></el-option>
                        <el-option label="动作元素" value="5"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="元素格式" prop="dataType">
                    <el-select v-model="form.dataType">
                        <el-option label="文本" value="1"></el-option>
                        <el-option label="数字" value="2"></el-option>
                        <el-option label="URL" value="3"></el-option>
                        <el-option label="URL List" value="4"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="编辑方式" prop="editType">
                    <el-select v-model="form.editType">
                        <el-option label="填写" value="1"></el-option>
                        <el-option label="上传" value="2"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item>

                    <el-dropdown split-button type="primary" @click="handleSave" @command="handleSaveCommand">
                        保存
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="1">保存，回列表</el-dropdown-item>
                            <el-dropdown-item command="2">保存，去模板</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                    <el-button type="default" @click="handleReset">重置</el-button>

                </el-form-item>

            </el-form>

        </el-card>
    </section>


</template>
<script>
    export default {
        data() {
            return {
                form: {
                    id: "",
                    name: "",
                    macro: "",
                    sysType: "",
                    useType: "",
                    dataType: "",
                    editType: "",
                },
                rules: {
                    // 名称
                    name: [
                        {
                            required: true,
                            message: "请输入元素名称",
                            trigger: "blur"
                        }
                    ],
                    // 元素代码
                    macro: [
                        {
                            required: true,
                            message: "请输入元素代码",
                            trigger: "blur"
                        }
                    ],
                    // 元素类型
                    sysType: [
                        {
                            required: true,
                            message: "请选择元素类型",
                            trigger: "change"
                        }
                    ],
                    // 使用范围类型
                    useType: [
                        {
                            required: true,
                            message: "请选择范围类型",
                            trigger: "change"
                        }
                    ],
                    // 元素格式类型
                    dataType: [
                        {
                            required: true,
                            message: "请选择元素格式类型",
                            trigger: "change"
                        }
                    ],
                    // 元素编辑方式
                    editType: [
                        {
                            required: true,
                            message: "请选择编辑方式类型",
                            trigger: "change"
                        }
                    ]
                }
            }
        },
        methods: {
            // 表单重置
            handleReset () {
                this.$refs["macroForm"].resetFields();
            },
            // 直接保存
            handleSave () {
                // 验证表单
                this.$refs["macroForm"].validate((valid) => {
                    if (valid) {
                        // 表单校验成功，提交
                        let url = "";
                        if(this.form.id != "") {
                            url ="/macros/update";
                        } else {
                            url = "/macros/create"
                        }
                        this.$http.post(url, this.form)
                            .then((response) => {
                                if (response.status == 200) {
                                    this.$message({
                                        type: "success",
                                        message: "保存成功"
                                    });
                                    this.handleReset();
                                }
                            })
                            .catch((response) => {
                                this.$message({
                                    type: "error",
                                    message: "保存失败，稍后重试"
                                });
                            });
                    } else {
                        // 表单校验失败
                        return this.$message({
                            type: "error",
                            message: "表单校验失败"
                        });
                    }
                });
            },
            handleSaveCommand (command) {
                this.handleSave();
                if (command == 1) {
                    // 保存并跳转去列表
                    setTimeout(() => {
                        window.location.href = "/#/macro/list"
                    }, 500);
                }
                if (command == 2) {
                    // TODO 保存并跳转去模板
                    setTimeout(() => {
                        window.location.href = "/#/macro/list"
                    }, 500);
                }
            }
        },
//        watch: {
//            // 检测路由参数变化
//            "$route" (to, from) {
//                let id = to.params.id;
//                if (id) {
//                    // 主键非空，则为编辑元素
//                    this.$http.get("/macros/get/" + id)
//                        .then((response) => {
//                            console.log(response.data);
//                            this.form.id = response.data.id;
//                            this.form.name = response.data.name;
//                            this.form.macro = response.data.macro;
//                            this.form.sysType = response.data.sysType + "";
//                            this.form.useType = response.data.useType + "";
//                            this.form.dataType = response.data.dataType + "";
//                            this.form.editType = response.data.editType ;
//                        })
//                        .catch((response) => {
//                            console.log(response);
//                        });
//                } else {
//                    console.log("新建元素");
//                }
//            }
//        },
        created () {
            this.$root.title = "元素";
            this.$root.subTitle = "新增";
            let id = this.$route.params.id;
            if (id) {
                // 主键非空，则为编辑元素
                this.$http.get("/macros/get/" + id)
                    .then((response) => {
                        console.log(response.data);
                        this.form.id = response.data.id;
                        this.form.name = response.data.name;
                        this.form.macro = response.data.macro;
                        this.form.sysType = response.data.sysType + "";
                        this.form.useType = response.data.useType + "";
                        this.form.dataType = response.data.dataType + "";
                        this.form.editType = response.data.editType + "";
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            }
        }
    }
</script>