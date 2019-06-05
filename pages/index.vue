<template>
	<section class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-lg-9 text-center">
				<h1>Human Interface Guidelines</h1>
				<p>Obtenha informações detalhadas em <strong>Português Brasileiro</strong> e recursos de interface do usuário para projetar ótimos aplicativos que se integram perfeitamente às plataformas da Apple.</p>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-12 col-lg-10">
				<div class="row items">
					<div class="col-12 col-md-6" id="macos">
						<a href="macos/" title="macOS">
							<p>macOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="ios">
						<a href="ios/" title="iOS">
							<p>iOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="tvos">
						<a href="tvos/" title="tvOS">
							<p>tvOS</p>
						</a>
					</div>

					<div class="col-12 col-md-6" id="watchos">
						<a href="watchos/" title="watchOS">
							<p>watchOS</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
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
				padding:0px;
				margin:0px;
			}
		}
	}
</style>
