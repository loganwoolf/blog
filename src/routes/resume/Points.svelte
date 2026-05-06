<script lang="ts">
	import Section from './Section.svelte';

	const sections: Record<string, Array<string>> = {
		Strengths: [
			'Clear communication that aligns technical work with stakeholder goals.',
			'Rapidly builds client trust through empathy, reliability, and accountability.',
			'Scopes feature sets to maximize value while minimizing complexity.',
			'Finds creative solutions in resource-constrained environments.',
			'Writes maintainable code with clear intent.',
		],
		// preferences: ['Fully remote roles with established enterprises or agencies.']
	};
</script>

{#each Object.entries(sections) as [key, value] (key)}
	<Section heading={key}>
		<ul>
			{#each value as point (point)}
				<li>{point}</li>
			{/each}
		</ul>
	</Section>
{/each}
