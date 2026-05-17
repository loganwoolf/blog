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

<style>
	h2 {
		border-bottom: 1px solid currentColor;
		padding-block: 0.25em;
		text-transform: capitalize;
	}
</style>
