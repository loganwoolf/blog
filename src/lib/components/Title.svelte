<script lang="ts">
	let { title = '' } = $props();
</script>

<svelte:head>
	<title>
		{title && `${title} on `}loganwoolf.dev
	</title>
</svelte:head>
