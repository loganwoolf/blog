<script lang="ts">
	import Section from './Section.svelte';

	const entries: Array<{
		institution: string;
		start: string;
		end: string;
		program: string;
		description: string;
		points: Array<string>;
	}> = [
		{
			institution: 'Lighthouse Labs',
			start: '2022-01',
			end: '2022-04',
			program: 'Web Development',
			description: 'High-intensity program studying computer science topics and web programming.',
			points: [
				'JavaScript and Ruby',
				'Data structures and algorithms',
				'Node, React, Ruby on Rails, HTML templating, CSS',
				'Environments and deployment',
				'Technical writing',
			],
		},
		{
			institution: 'Northern Alberta Institute of Technology',
			start: '2006-09',
			end: '2008-04',
			program: 'Geomatics Engineering Technology',
			description:
				"Studied advanced theory and techniques for measurement and classification of earth's features.",
			points: [
				'Technical Communication (research, writing, presenting)',
				'Calculus',
				'Land Surveying + Geodesy',
				'Programming (HP 50 calculator)',
				'Drafting (manual, CAD)',
				'Geographic Information Systems',
			],
		},
	];
</script>

<Section heading="education">
	{#each entries as entry (entry.start)}
		<article>
			<h3>{entry.institution}</h3>
			<p class="spread">
				<span>{entry.program}</span>
				<span>
					<time datetime={entry.start}>{entry.start}</time>
					-
					<time datetime={entry.end}>{entry.end}</time>
				</span>
			</p>
			<p>{entry.description}</p>
			<ul>
				{#each entry.points as point (point)}
					<li>{point}</li>
				{/each}
			</ul>
		</article>
	{/each}
</Section>
