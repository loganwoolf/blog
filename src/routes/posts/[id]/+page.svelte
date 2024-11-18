<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import PostTags from '$lib/components/PostTags.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title={data.post.title} />

<main class="page page--post">
	<div class="content">
		<article>
			<header>
				<Markdown markdown={'# ' + data.post.title} />
				<div>
					<PostDate date={data.post.publish_date} />
				</div>
			</header>
			<main>
				<Markdown markdown={data.post.markdown} />
			</main>
			<footer>
				<PostTags post={data.post} tags={data.tags} />
			</footer>
		</article>
	</div>
</main>

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
