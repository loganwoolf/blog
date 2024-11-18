<script lang="ts">
	import { micromark } from 'micromark';

	let { markdown }: { markdown: string } = $props();
</script>

<div class="markdown">
	{@html micromark(markdown)}
</div>

<style>
	.markdown :global {
		h1 {
			margin-top: 0;
		}

		pre {
			border: 1px solid black;
			padding: 1em;
			overflow: auto;
			scrollbar-width: thin;
		}
	}
</style>
