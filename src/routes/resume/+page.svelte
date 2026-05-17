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
		@page {
			size: letter;
			margin: 0.75in 0.65in;
			@top-right {
				content: "Logan Woolf";
				font-size: 8pt;
			}
			@bottom-right {
				content: "Page " counter(page);
				font-size: 8pt;
			}
		}

		@page :first {
			@top-right {
				content: none;
			}
			@bottom-right {
				content: none;
			}
		}

		@media print {
			.print-hide {
				display: none !important;
			}

			article {
				font-size: 10pt;
				line-height: 1.3;
			}

			h1 {
				font-size: 20pt;
				margin-bottom: 0.1em;
			}

			h2 {
				font-size: 11pt;
				margin: 0.9em 0 0.25em;
			}

			h3 {
				font-size: 10.5pt;
				margin: 0.5em 0 0.15em;
			}

			p {
				margin: 0.2em 0;
			}

			ul {
				margin: 0.2em 0;
			}

			li {
				margin: 0.15em 0;
				orphans: 3;
				widows: 3;
			}

			header p {
				font-size: 12pt;
				margin-top: 0;
			}

			header {
				margin-bottom: 0.5em;
			}

			article :global(section:first-of-type) {
				margin-top: 0;
			}

			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
</style>
