<template>

    <section class="edit-panel">

        <el-card>

            <el-form ref="supplierForm"
                     :rules="rules"
                     :model="form"
                     label-width="100px"
                     label-position="right">

                <h4 class="hr-h4">基本信息</h4>
                <div class="hr-div"></div>

                <el-input v-model="form.supplierId" v-show="false"></el-input>

                <el-form-item label="名称" prop="supplierName">
                    <el-input v-model="form.supplierName"></el-input>
                </el-form-item>

                <el-form-item label="备注" prop="mark">
                    <el-input type="textarea" v-model="form.remark"></el-input>
                </el-form-item>


                <h4 class="hr-h4">联系人信息</h4>
                <div class="hr-div"></div>

                <el-form-item label="姓名" prop="contactName">
                    <el-input v-model="form.contactName"></el-input>
                </el-form-item>

                <el-form-item label="邮件" prop="contactEmail">
                    <el-input v-model="form.contactEmail"></el-input>
                </el-form-item>

                <el-form-item label="手机" prop="contactMobile">
                    <el-input v-model="form.contactMobile"></el-input>
                </el-form-item>

                <el-form-item label="固话" prop="contactTelephone">
                    <el-input v-model="form.contactTelephone"></el-input>
                </el-form-item>

                <el-form-item label="地址" prop="contactAddress">
                    <el-input v-model="form.contactAddress"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="handleSave">保存</el-button>
                </el-form-item>

            </el-form>

        </el-card>


    </section>

</template>

<script>

    export default {
        data () {
            return {
                form: {
                    supplierId: "",
                    supplierName: "",
                    remark: "",
                    contactName: "",
                    contactEmail: "",
                    contactMobile: "",
                    contactTelephone: "",
                    contactAddress: ""
                },
                rules: {
                    supplierName: [
                        {
                            required: true,
                            message: "请输入供应商名称",
                            trigger: "blur"
                        }
                    ],
                    // TODO 校验规则无效????
                    contactEmail: [
                        {
                            type: "email",
                            message: "请输入正确的邮件格式",
                            trigger: "blur"
                        }
                    ],
                    contactMobile: [
                        {
                            type: "regexp",
                            pattern : "/^1[0-9]{10}$/",
                            message: "手机号格式错误",
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        methods: {
            handleSave() {
                this.$refs["supplierForm"].validate((valid) => {
                    if(valid) {
                        let url = "";
                        if(this.form.supplierId == "") {
                            url = "/supplier/create";
                        } else {
                            url = "/supplier/update";
                        }
                        this.$http.post(url, this.form)
                            .then((response) => {
                                if(response.status == 200) {
                                    this.$message({
                                        type: "success",
                                        message: "保存成功"
                                    });
                                    setTimeout(() => {
                                        window.location.href = "/#/supplier/list";
                                    }, 500);
                                }
                            })
                            .catch((error) => {
                                this.$message({
                                    type: "error",
                                    message: "保存失败，稍后重试"
                                });
                            });
                    } else {
                        this.$message({
                            type: "error",
                            message: "表单校验失败"
                        })
                    }
                })
            }
        },
        created () {
            this.$root.title = "广告供应商";
            let id = this.$route.params.id;
            if (id) {
                this.$root.subTitle = "编辑";
                // 主键非空，则为编辑供应商信息
                this.$http.get("/supplier/get/" + id)
                    .then((response) => {
                        this.form.supplierId = response.data.supplierId;
                        this.form.supplierName = response.data.supplierName;
                        this.form.remark = response.data.remark;
                        this.form.contactName = response.data.contactName;
                        this.form.contactEmail = response.data.contactEmail;
                        this.form.contactMobile = response.data.contactMobile;
                        this.form.contactTelephone = response.data.contactTelephone;
                        this.form.contactAddress = response.data.contactAddress;
                    })
                    .catch((error) => {
                        this.$message({
                            type: "error",
                            message: "加载数据失败，稍后重试"
                        })
                    });
            } else {
                this.$root.subTitle = "新增";
            }
        }
    }

</script>