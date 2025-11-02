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
			start: 'Jan 2022',
			end: 'Apr 2022',
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
			start: 'Sept 2006',
			end: 'Apr 2008',
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
	<ol>
		{#each entries as entry (entry.start)}
			<li>
				<h3>{entry.institution}</h3>
				<p>{entry.program}</p>
				<div>
					<time>{entry.start}</time>
					-
					<time>{entry.end}</time>
				</div>
				<p>{entry.description}</p>
				<ul>
					{#each entry.points as point (point)}
						<li>{point}</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ol>
</Section>
