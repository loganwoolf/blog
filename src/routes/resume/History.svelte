<script lang="ts">
	import Section from './Section.svelte';

	const entries: {
		[name: string]: {
			role: string;
			start: string;
			end: string;
			points: string[];
		};
	} = {
		'Arctic Leaf': {
			role: 'Senior Web Developer',
			start: '2022-06',
			end: 'present',
			points: [
				'Researched alternatives and pitched plan to replace Apollo Client with graphql-request. Added query type generation, stripped dead dependencies. Cut bundle size, rolled out to all new client work.',
				'Widget updates were manual API calls. Built CLI so the team could handle pulls, pushes, versioning—repo-tracked and predictable.',
				'Blessed Performance product catalog was a mess—California eligibility buried in free-form descriptions, customers couldn\'t filter reliably. Built migration script that scanned pages for key terms, auto-handled obvious cases, flagged ambiguous ones for manual review. Migrated 10K+ products.',
				'Product migration module was broken and risky to touch. Used AI agents to generate tests from requirements, then iteratively rebuilt until 100% pass rate.',
			],
		},
		'Brown Okamura & Associates': {
			role: 'Senior Technologist',
			start: '2008-05',
			end: '2021-12',
			points: [
				'Reduced project turnaround times 60%+ through workflow optimization and technology adoption. Eliminated legacy coordinate conversion work and related accuracy problems affecting field crew.',
			],
		},
	};
</script>

<Section heading="Work History">
	{#each Object.entries(entries) as [company, details] (company)}
		<article>
			<h3>{details.role}</h3>
			<p class="spread">
				<span>{company}</span>
				<span>
					<time datetime={details.start}>{details.start}</time> to
					<time datetime={details.end}>{details.end}</time>
				</span>
			</p>
			<ul>
				{#each details.points as point (point)}
					<li>{point}</li>
				{/each}
			</ul>
		</article>
	{/each}
</Section>
