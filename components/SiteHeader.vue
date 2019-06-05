<template>
    <header class="site-header sticky-top py-1">
        <nav class="navbar navbar-expand-md">
			<div class="container">
				<a class="navbar-brand" href="#">Human Interface Guidelines</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<form class="form-inline mt-2 mt-md-0">
						<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
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
</style>