<template>

    <section class="table-panel">

        <el-card>

            <h2>应用列表 - {{id}}</h2>

        </el-card>

    </section>

</template>

<script>

    export default {
        data () {
            return {
                id: 0
            }
        },
        methods : {

        },
        watch : {
            "$route" (to, from) {
                this.id = to.params.id;
            }
        },
        created () {
            this.$root.title = "应用";
            this.$root.subTitle = "列表";
            this.id = this.$route.params.id;
        }
    }

</script>


