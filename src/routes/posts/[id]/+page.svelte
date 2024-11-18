<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import PostTags from '$lib/components/PostTags.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title={data.post.title} />

<div class="page page--post">
	<div class="content">
		<article>
			<h1>{data.post.title}</h1>
			<PostDate date={data.post.publish_date} />
			<Markdown markdown={data.post.markdown} />
			<PostTags post={data.post} tags={data.tags} />
		</article>
	</div>
</div>

<style>
	.page--post {
		margin-top: 1.5rem;
	}

	article :global {
		footer {
			margin-top: 2em;
		}
	}
</style>
