<script lang="ts">
	import { micromark } from 'micromark';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	console.log({ data });
</script>

<svelte:head>
	<title>{data.post.title} on loganwoolf.dev</title>
</svelte:head>

<a href="/posts">Back to Posts</a>

<div class="page page--post">
	<div class="content">
		<article>
			<h1>{data.post.title}</h1>

			{@html micromark(data.post.markdown)}

			<h2>Tags</h2>
			<ul>
				{#each data.post.tags as postTag}
					<li>
						{data.tags.find((tag) => tag.id === postTag)?.name}
					</li>
				{/each}
			</ul>
		</article>
	</div>
</div>

<style>
	:global {
		pre {
			text-wrap: wrap;
		}
	}
</style>
