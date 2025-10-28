<script>
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Summary from './Summary.svelte';
</script>

<article>
	<header>
		<h1>Logan Woolf</h1>
		<p>Web Developer</p>
		<a href="mailto:loganwoolf@gmail.com">loganwoolf@gmail.com</a>
	</header>
	<main>
		<Summary />
		<Skills />
		<Projects />
		<Education />
	</main>
</article>
