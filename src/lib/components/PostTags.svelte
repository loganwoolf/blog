<script lang="ts">
	let { post, tags } = $props();

	const postTags = $derived(
		post.tags.map(
			(postTag: string) =>
				tags.find((tag: { id: string; name: string }) => tag.id === postTag)?.name
		)
	);
</script>

<ul>
	{#each postTags as postTag}
		<li>
			<a href="/posts?tag={postTag}">
				#{postTag}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: var(--padding-block, 1rem) 0 0;
		border-top: 1px solid black;
	}

	li {
		display: inline;
		margin-right: 0.5em;
	}

	a:not(:hover) {
		text-decoration: none;
	}
</style>
