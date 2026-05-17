<script lang="ts">
	import Section from './Section.svelte';

const sections: Record<string, Array<string>> = {
		Strengths: [
			'Digs into the real problem behind the stated request.',
			'Builds client trust through honesty and follow-through.',
			'Can narrow a feature list to what moves the needle.',
			'Eliminates manual bottlenecks and elevates team performance.',
			'Uses AI agents to debug at scale and tackle parallel tasks efficiently.',
			'Comfortable finding workarounds when ideal solutions aren\'t available.',
			'Writes code the next person can actually understand.',
		],
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
