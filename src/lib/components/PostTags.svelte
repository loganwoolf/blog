<script lang="ts">
	let { post, tags } = $props();
</script>

<footer class="tags">
	<p class="heading">Tags</p>
	<ul>
		{#each post.tags as postTag}
			<li>
				{tags.find((tag: { id: string; name: string }) => tag.id === postTag)?.name}
			</li>
		{/each}
	</ul>
</footer>

<style>
	.tags {
		border-top: 1px solid black;
		margin-top: 1em;
		padding-top: 1em;

		.heading {
			float: left;
			margin: 0;
		}

		ul {
			list-style: none;
			margin: 0;
		}

		li {
			display: inline;

			&:not(:last-child):after {
				content: '';
				border-right: 1px solid black;
				margin: 0 0.5em;
			}
		}
	}
</style>
