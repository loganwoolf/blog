<svelte:head>
	<title>loganwoolf.dev</title>
</svelte:head>

<div class="page page--home">
	<div class="content">
		<h1 class="heading">Hey!</h1>
		<p>
			Thanks for visiting my site. I'm Logan Woolf, a frontend web developer currently residing in
			Lethbridge, AB, Canada. There are posts here about building for the web and some information
			about me.
		</p>
		<nav>
			<ul>
				<li><a href="/posts">Posts</a></li>
				<li><a href="/about">About Me</a></li>
			</ul>
		</nav>
	</div>
</div>

<style>
	:global {
		body {
			margin: 0;
		}
	}

	.page--home {
		display: grid;
		place-content: center;
		height: 100dvh;
	}

	.content {
		max-width: 40ch;
		text-align: justify;
	}

	.heading {
		margin-top: unset;
	}
</style>
