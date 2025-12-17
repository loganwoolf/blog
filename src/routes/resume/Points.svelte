<script lang="ts">
	import Section from './Section.svelte';

	const sections: Record<string, Array<string>> = {
		strengths: [
			'Delivers clear, goal-aligned communication attuned to stakeholder perspectives.',
			'Builds client trust rapidly through empathy, reliability, and accountability.',
			'Skilled at scoping and estimating new feature sets in a way that maximizes stakeholder value and minimizes project complexity.',
			'Finds innovative solutions, particularly in resource-constrained environments or situations. ',
			'Writes dead simple code with clear, maintainable intent.',
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
