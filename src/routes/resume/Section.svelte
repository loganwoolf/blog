<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		heading,
		children,
	}: {
		heading: string;
		children: Snippet;
	} = $props();
</script>

<section>
	<h2>{heading}</h2>

	{@render children()}
</section>
