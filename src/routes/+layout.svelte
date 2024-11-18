<script>
	let { children } = $props();
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/posts">Posts</a></li>
			<li><a href="/about">About Me</a></li>
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
	:global {
		body {
			display: flex;
			flex-direction: column;
			min-height: 100dvh;
			margin: 0 auto;
			max-width: 832px;
			padding: 0 2rem;
			box-sizing: border-box;
		}

		.page {
			flex: 1;
		}

		a,
		a:visited {
			color: black;
		}
	}

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
