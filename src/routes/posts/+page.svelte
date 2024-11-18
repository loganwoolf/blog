<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import PostTags from '$lib/components/PostTags.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title="Posts" />

<main class="page page--posts">
	<div class="content">
		<h1>Posts</h1>
		<ul>
			{#each data.posts.items as post}
				<li>
					<article>
						<header>
							<div class="heading"><Markdown markdown={'# ' + post.title} /></div>
							<p><PostDate date={post.publish_date} /></p>
						</header>
						<main>
							<Markdown markdown={post.markdown.split('\n')[0]} />
							<p><a href="/posts/{post.id}">Read</a></p>
						</main>
						<footer>
							<PostTags {post} tags={data.tags} />
						</footer>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	ul {
		list-style: none;
		padding: 0;
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
