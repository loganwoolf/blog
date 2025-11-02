<script>
	import Education from './Education.svelte';
	import Points from './Points.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Summary from './Summary.svelte';
</script>

<article>
	<header>
		<h1>Logan Woolf</h1>
		<p>Web Developer</p>
	</header>
	<main>
		<Summary />
		<Skills />
		<Points />
		<Projects />
		<Education />
	</main>
</article>
