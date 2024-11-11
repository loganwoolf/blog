<script lang="ts">
	export let data;
</script>

<h1>Hello</h1>

<h2>Posts</h2>
<ul>
	{#each data.posts.items as post}
		<li>
			<article>
				<header>
					<h3>{post.title}</h3>
				</header>
				<main>
					<p>{@html post.content}</p>
				</main>
				<footer>
					<p>Tags</p>
					<ul>
						{#each post.tags as postTag}
							<li>
								{data.tags.find((tag) => tag.id === postTag)?.name}
							</li>
						{/each}
					</ul>
				</footer>
			</article>
		</li>
	{/each}
</ul>
