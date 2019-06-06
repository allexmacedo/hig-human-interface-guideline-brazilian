<template>
    <header class="site-header sticky-top py-1">
		<div class="container">
			<nav class="navbar navbar-expand-md">
				<a class="navbar-brand" href="/hig-human-interface-guidelines-portuguese" title="Human Interface Guidelines em Português Brasil">
					Human Interface Guidelines
					<img src="~/static/icon-brazil.png" height="25px" class="d-inline-block" alt="Ícone bandeira do Brasil">
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
						<li class="nav-item active">
							<a class="nav-link" href="/hig-human-interface-guidelines-portuguese" title="Visão geral">Visão geral</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="https://developer.apple.com/design/resources/" target="_blank" title="Recursos">Recursos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="https://developer.apple.com/videos/design/" target="_blank" title="Vídeos">Vídeos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#" title="Novidades">Novidades</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
	.site-header {
		border-bottom: 1px solid #ccc;
		background: rgba(255,255,255,0.9);
		transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
	}

	.navbar {

		&-brand {
			font-size: 25px;
			line-height: 0px;
			font-weight: 500;
			color: #333;
		}

		img {
			border-radius: 50px;
		}

		&-nav {
			li {
				font-size: 13px;

				a {
					color: #333;

					&:hover {
						color: #007bff;
					}
				}
			}
		}
	}

</style>