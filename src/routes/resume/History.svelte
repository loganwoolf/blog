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
				'Lead developer on BigCommerce and Shopify Plus projects for mid-to-large B2B and B2C clients across manufacturing, distribution, and retail.',
				'Architected and implemented custom themes, apps, and integrations on BigCommerce and Shopify platforms.',
				'Optimized website performance and accessibility, improving page speed scores and search rankings for multiple clients.',
				'Mentored junior developers through code reviews and pair programming to maintain high code quality standards.',
				'Collaborated with cross-functional teams including designers, project managers, and marketers to deliver solutions meeting business goals and user needs.',
			],
		},
		'Brown Okamura & Associates': {
			role: 'Senior Technologist',
			start: '2008-05',
			end: '2021-12',
			points: [
				'Delivered land title, boundary, topographic, and construction surveying services.',
				'Reduced project turnaround times by 60% or more through process optimization and technology adoption.',
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
