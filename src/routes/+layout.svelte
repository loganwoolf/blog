<script lang="ts">
	import { resolve } from '$app/paths';
	import '$lib/styles.css';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<header>
	<nav>
		<ul>
			<li><a href={resolve('/')}>Home</a></li>
			<li><a href={resolve('/posts/')}>Posts</a></li>
			<li><a href={resolve('/resume/')}>About Me</a></li>
		</ul>
	</nav>
</header>

{@render children()}

<footer>
	<p>
		Built with <a href="https://ubuntu.com">Ubuntu</a>,
		<a href="https://pocketbase.io">Pocketbase</a>, and
		<a href="https://kit.svelte.dev">SvelteKit</a>
	</p>
	<a href="#top">Back to Top</a>
</footer>

<style>
	header {
		ul {
			display: flex;
			gap: 1em;
			list-style: none;
			padding: 0;
			margin: 1em 0;
		}
	}

	footer {
		display: flex;
		justify-content: space-between;
		margin: 1em 0;

		p {
			margin: 0;
		}
	}
</style>
