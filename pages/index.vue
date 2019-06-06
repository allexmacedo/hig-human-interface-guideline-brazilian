<template>
	<section class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-9 text-center title">
				<h1>Human Interface Guidelines</h1>
				<p>Obtenha informações detalhadas em <strong>Português Brasileiro</strong> e recursos de interface do usuário para projetar ótimos aplicativos que se integram perfeitamente às plataformas da Apple.</p>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-12 col-lg-11">
				<div class="row items">
					<div class="col-12 col-md-6" id="macos">
						<a href="macos/" title="macOS">
							<img src="~/static/images/platform-macos-large.png" srcset="~/static/images/platform-macos-large@2x.png 2x" height="175">
							<p>macOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="ios">
						<a href="ios/" title="iOS">
							<img src="~/static/images/platform-ios.svg" height="175" alt="">
							<p>iOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="watchos">
						<a href="watchos/" title="watchOS">
							<img src="~/static/images/platform-watchos.svg" height="175" alt="">
							<p>watchOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="tvos">
						<a href="tvos/" title="tvOS">
							<img src="~/static/images/platform-tvos.svg" height="175" alt="">
							<p>tvOS</p>
						</a>
					</div>

				</div>
			</div>
		</div>
	</section>
</template>

<script>

export default {
	data () {
		return {
			title: 'HIG'
		}
	},
	head () {
		return {
			title: this.title,
			titleTemplate: '%s - Human Interface Guidelines em Português Brasileiro.',
			meta: [
				{ hid: 'description', name: 'description', content: 'Teste de tag'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>

	.title {
		margin-top: 80px;
		margin-bottom: 40px;

		h1 {
			font-size: 45px;
			font-weight: 500;
			padding-bottom: 30px;
		}

		p {
			font-size: 20px;
		}
	}

	.items {
		a {
			background-color: #fafafa;
			display: block;
			cursor: pointer;
			text-decoration: none;
			padding: 3em;
			margin: 2em 1em;
			text-align: center;

			p {
				font-size: 16px;
				padding:0px;
				margin:20px 0 0 0;
			}
		}
	}
</style>
