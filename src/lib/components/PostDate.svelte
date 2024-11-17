<script lang="ts">
	let { date }: { date: string | Date } = $props();

	const parsedDate = date instanceof Date ? date : new Date(date);

	const dateFormatter = new Intl.DateTimeFormat('en-CA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<time datetime={parsedDate.toISOString()}>{dateFormatter.format(parsedDate)}</time>
