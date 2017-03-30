<template>

	<section class="table-panel">
		<el-card>
			<h1>欢迎</h1>
		</el-card>
	</section>

</template>

<script>


	export default {
		data() {
			return {
				message: "",
			}
		},
		methods: {},
		created () {
			this.$root.title = "仪表盘";
			this.$root.subTitle = "";
		}
	}

</script>
