<script lang="ts">
	import Section from './Section.svelte';

	const sections: Record<string, Array<string>> = {
		strengths: [
			'Outstanding communication: Able to explain intricate technologies to non-technical stakeholders.',
			'Skilled at scoping and estimating new feature sets in a way that maximizes value and minimizes complexity.',
			'Finds innovative solutions, particularly in resource-constrained environments or situations.',
			'Rapidly builds client trust through empathy, reliability, and accountability.',
			'Consistently inquisitive: always seeking improvement and writing code with clear, maintainable intent.',
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
