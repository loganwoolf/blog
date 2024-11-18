<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import PostTags from '$lib/components/PostTags.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title="Posts" />

<div class="page page--posts">
	<div class="content">
		<h1>Posts</h1>
		<ul>
			{#each data.posts.items as post}
				<li>
					<article>
						<h1 class="heading">{post.title}</h1>
						<p><PostDate date={post.publish_date} /></p>
						<Markdown markdown={post.markdown.split('\n')[0]} />
						<p><a href="/posts/{post.id}">Read</a></p>
						<PostTags {post} tags={data.tags} />
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

	ul {
		list-style: none;
	}

	article {
		border: 1px solid black;
		padding: 2em;
		margin-bottom: 2rem;
	}

	.heading {
		margin-top: 0;
	}
</style>
