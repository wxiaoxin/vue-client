<template>
    <section class="edit-panel">
        <el-card>

            <el-form ref="form" :rules="rules" :model="supplier" label-width="100px">

                <el-row>
                    <h3 style="color: rgb(32, 160, 255);margin-bottom: 10px">基本信息</h3>
                </el-row>

                <hr/>

                <el-row>
                    <el-col>
                        <el-form-item label="名称" prop="name">
                            <el-input v-model="supplier.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="12">
                        <el-form-item label="备注" prop="mark">
                            <el-input type="textarea" v-model="supplier.mark"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row style="margin-top: 48px">
                    <h3 style="color: rgb(32, 160, 255);margin-bottom: 10px">联系人信息</h3>
                </el-row>

                <hr/>

                <el-row>
                    <el-form-item label="姓名" prop="username">
                        <el-input v-model="supplier.username"></el-input>
                    </el-form-item>
                </el-row>

                <el-row>
                    <el-form-item label="电子邮件" prop="">
                        <el-input v-model="supplier.email"></el-input>
                    </el-form-item>
                </el-row>

                <el-row>
                    <el-form-item label="移动电话" prop="mobile">
                        <el-input v-model="supplier.mobile"></el-input>
                    </el-form-item>
                </el-row>

                <el-row>
                    <el-form-item label="固定电话">
                        <el-input v-model="supplier.phone"></el-input>
                    </el-form-item>
                </el-row>

                <el-row>
                    <el-form-item label="通信地址">
                        <el-input v-model="supplier.address"></el-input>
                    </el-form-item>
                </el-row>

            </el-form>

            <el-row style="text-align: center; margin-top: 32px;">
            
                <el-button type="primary" @click="save">保存</el-button>

                <el-button type="default" @click="cacel">取消</el-button>

            </el-row>

        </el-card>
    </section>


</template>
<script>
    export default {
        data() {
            return {
                supplier: {
                    name: "",
                    mark: "",
                    username: "",
                    email: "",
                    mobile: "",
                    phone: "",
                    address: ""
                },
                rules: {
                    // 名称
                    name: [
                        {
                            required: true,
                            message: "请输入供应商名称",
                            trigger: "blur"
                        }, {
                            max: 10,
                            min: 5,
                            message: "长度在5~10个字符之间",
                            trigger: "blur"
                        }
                    ],
                    // 备注
                    mark: [
                        {
                            max: 220,
                            message: "最多220个字符"                          
                        }
                    ],
                    // 用户名
                    username: [
                        {
                            required: true,
                            message: "请输入联系人姓名",
                            trigger: "blur"
                        }, {
                            max: 32,
                            min: 4,
                            message: "长度在4~32个字符之内",
                            trigger: "blur"
                        }
                    ],
                    // 邮件
                    email: [
                        {
                            required: false
                        }, {
                            type: "email",
                            message: "请输入合法的邮件地址"
                        }
                    ],
                    // 手机号
                    mobile: [
                        {
                            required: true,
                            message: "请输入联系方式"
                        },{
                            len: 11,
                            message: "请输入合法的11位联系方式"
                        }
                    ]
                }
            }
        },
        methods: {
            save() {
                console.log(this.supplier);
            },
            cacel () {
                console.log("取消");
            }
        },
        created () {
            this.$root.title = "广告供应商";
            this.$root.subTitle = "新增";
        }
    }
</script>