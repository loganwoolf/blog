<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Post, Tag } from '$lib/types/pocketbase';

	let { post, tags }: { post: Post; tags: Tag[] } = $props();

	const postTags = $derived(
		post.tags
			.map((postTag: string) => tags.find((tag) => tag.id === postTag)?.name)
			.filter((name): name is string => name !== undefined)
	);
</script>

<ul>
	{#each postTags as postTag (postTag)}
		<li>
			<a href={resolve(`/posts/?tag=${postTag}`)}>
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
