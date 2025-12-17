<script>
	import Education from './Education.svelte';
	import History from './History.svelte';
	import Points from './Points.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Summary from './Summary.svelte';
</script>

<article class="print-show">
	<header>
		<h1>Logan Woolf</h1>
		<p>Web Developer</p>
	</header>
	<main>
		<Summary />
		<Points />
		<Skills />
		<Projects />
		<History />
		<Education />
	</main>
</article>

<style>
	:global {
		@media print {
			.print-hide {
				display: none !important;
			}
		}
	}
</style>
