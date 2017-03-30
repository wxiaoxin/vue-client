<template>


    <section class="edit-panel">

        <el-card>

            <h2>应用编辑</h2>

        </el-card>

    </section>

</template>

<script>

    export default {
        data () {
            return {

            }
        },
        methods : {

        },
        created () {
            this.$root.title = "应用";
            this.$root.subTitle = "编辑";
        }
    }

</script>