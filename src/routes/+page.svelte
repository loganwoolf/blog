<script lang="ts">
	import Title from '$lib/components/Title.svelte';
</script>

<Title />

<div class="page page--home center">
	<main class="content">
		<h1 class="heading">Hey!</h1>
		<p>
			Thanks for visiting my site. I'm Logan Woolf, a frontend web developer from Lethbridge,
			Canada. There are posts here about building for the web and a bit of information about me.
		</p>
	</main>
</div>

<style>
	:global {
		.content {
			margin: auto;
			max-width: 70ch;
		}

		.center {
			display: grid;
			place-content: center;
		}
	}

	.content {
		max-width: 40ch;
		text-align: justify;
	}

	.heading {
		margin-top: unset;
	}
</style>
