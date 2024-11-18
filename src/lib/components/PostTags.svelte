<script lang="ts">
	let { post, tags } = $props();
</script>

<footer>
	<ul>
		{#each post.tags as postTag}
			<li>
				#{tags.find((tag: { id: string; name: string }) => tag.id === postTag)?.name}
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
</style>
