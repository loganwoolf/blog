<script lang="ts">
	import { micromark } from 'micromark';

	let { markdown }: { markdown: string } = $props();
</script>

<div class="markdown">
	{@html micromark(markdown)}
</div>

<style>
	:global {
		.markdown {
			pre {
				border: 1px solid black;
				padding: 1em;
			}
		}
	}
</style>
