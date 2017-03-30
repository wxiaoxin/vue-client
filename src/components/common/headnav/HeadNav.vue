<template>

    <header class="header-container" role="navigation">

        <!-- 消息弹层 -->
        <el-popover ref="messagePop"trigger="hover" placement="bottom" width="260">

            <ul class="header-message">
                <li v-for="message in messages">
                    <div class="message-img">
                        <img :src="message.img" alt="头像">
                    </div>
                    <div class="message-cnt">
                        <strong class="message-cnt-title">
                            {{message.title}}
                        </strong>
                        <br>
                        <small class="message-cnt-summary">
                            {{message.summary}}
                        </small>
                    </div>
                </li>
            </ul>

            <div class="header-message-more">
                <a href="javascript:void(0);">
                    <h3>查看全部消息</h3>
                </a>
            </div>

        </el-popover>

        <!-- 顶部工具栏 -->
        <nav>

            <!-- 左侧 -->
            <div class="nav-left">
                <!-- 折叠按钮 -->
                <el-button type="text" size="small">
                    <icon name="navicon" scale="1.4"></icon>
                </el-button>
            </div>

            <!-- 右侧 -->
            <div class="nav-right">
                <ul>
                    <li>
                        <!-- 系统消息 -->
                        <el-button size="small" type="text" v-popover:messagePop>
                            <el-badge :is-dot="messages.length > 0">
                                <icon name="envelope"></icon>
                            </el-badge>
                        </el-button>
                    </li>
                    <li>
                        <!-- 个人中心 -->
                        <el-button size="small" type="text">
                            <el-badge is-dot>
                                <icon name="user" scale="1.2"></icon>
                            </el-badge>
                        </el-button>
                    </li>
                    <li>
                        <!-- 退出登录 -->
                        <el-button size="small" type="text">
                            <icon name="sign-out" scale="1.2"></icon>
                        </el-button>
                    </li>
                </ul>
            </div>

        </nav>

    </header>

</template>

<script>

    export default {
        data() {
            return {
                user: "Admin",
                messages: []
            }
        },
        methods: {},
        created() {
            this.$http.get("/admin/message", {
                params: {
                    a: 1
                }
            }).then((response) => {
                this.messages = response.data.messages;
                if (this.messages.length > 0) {

                } else {

                }
            }, (error) => {
                alert(error);
            });
        }
    }

</script>