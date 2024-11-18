<script lang="ts">
	let { post, tags } = $props();

	const postTags = $derived(
		post.tags.map(
			(postTag: string) =>
				tags.find((tag: { id: string; name: string }) => tag.id === postTag)?.name
		)
	);
</script>

<footer>
	<ul>
		{#each postTags as postTag}
			<li>
				<a href="/posts?tag={postTag}">
					#{postTag}
				</a>
			</li>
		{/each}
	</ul>
</footer>

<style>
	footer {
		border-top: 1px solid black;
		margin-top: 1em;
		padding-top: 1em;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		display: inline;
		margin-right: 0.5em;
	}

	a:not(:hover) {
		text-decoration: none;
	}
</style>
