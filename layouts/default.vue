<template>
	<div>
		<site-header />
		<nuxt />
		<site-footer />
	</div>
</template>
<style lang="scss">
	body {
		-webkit-font-smoothing: antialiased;
    	text-rendering: optimizelegibility;
	}
</style>
<script>
    import SiteHeader from '~/components/SiteHeader.vue'
    import SiteFooter from '~/components/SiteFooter.vue'
    export default {
      components: {
        SiteHeader,
        SiteFooter
      },
      head () {
      return {
        titleTemplate: '%s - Human Interface Guidelines'
        }
      }
    }
</script>


