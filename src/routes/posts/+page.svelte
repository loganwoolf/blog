<script lang="ts">
	import Title from '$lib/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title="Posts" />

<div class="page page--posts">
	<a href="/">Back to Home</a>
	<div class="content">
		<h1>Posts</h1>
		<ul>
			{#each data.posts.items as post}
				<li>
					<article>
						<h3>{post.title}</h3>
						<p>{post.published_date}</p>
						<p>
							<a href="/posts/{post.id}">Read</a>
						</p>
						<ul>
							{#each post.tags as postTag}
								<li>
									{data.tags.find((tag) => tag.id === postTag)?.name}
								</li>
							{/each}
						</ul>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	:global {
		.page {
			margin: 2rem auto;
			max-width: 960px;
		}

		.content {
			margin: auto;
			max-width: 70ch;
		}
	}
</style>
