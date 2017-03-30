<template>

    <header class="header-container" role="navigation">

		<nav>

			<div class="nav-left">
				<el-button type="text" size="small">
					<icon name="navicon" scale="1.4"></icon>
				</el-button>
			</div>

			<div class="nav-right">
				<ul>
					<li>
						<el-button size="small" type="text">
							<el-badge is-dot>
								<icon name="envelope"></icon>
							</el-badge>
						</el-button>
					</li>
					<li>
						<el-button size="small" type="text">
							<el-badge is-dot>
								<icon name="user" scale="1.2"></icon>
							</el-badge>
						</el-button>
					</li>
					<li>
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
	import Icon from "../../../../node_modules/vue-awesome/components/Icon";

    export default {
		components: {Icon}, data() {
            return {
                user : "Admin"
            }
        },
        methods: {}
    }

</script>