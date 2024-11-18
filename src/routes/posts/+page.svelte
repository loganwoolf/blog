<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import PostDate from '$lib/components/PostDate.svelte';
	import PostTags from '$lib/components/PostTags.svelte';
	import Title from '$lib/components/Title.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Title title={data.pageTitle} />

<main class="page page--posts">
	<div class="content">
		<h1>{data.pageTitle}</h1>
		<ul>
			{#each data.posts.items as post}
				<li>
					<article>
						<div class="relative">
							<header>
								<div class="heading">
									<Markdown markdown={`# [${post.title}](/posts/${post.id})`} />
								</div>
								<p><PostDate date={post.publish_date} /></p>
							</header>
							<main>
								<Markdown markdown={post.markdown.split('\n')[0]} />
							</main>
						</div>
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
		--padding-block: 1rem;
		--padding-inline: 2rem;
		--shadow-size: 4px;
		border: 1px solid black;
		margin-bottom: 2rem;

		& :global {
			&:has(.heading a:hover) {
				box-shadow: var(--shadow-size) var(--shadow-size) 0px black;
			}
		}
	}

	.relative {
		position: relative;
		padding: var(--padding-block) var(--padding-inline) 0;
	}

	.heading {
		display: block;
		margin-top: 0;

		& :global {
			a {
				&:after {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
				}

				&:not(:hover) {
					text-decoration: none;
				}
			}
		}
	}

	footer {
		padding: 0 var(--padding-inline) var(--padding-block);
		z-index: 2;
	}
</style>
