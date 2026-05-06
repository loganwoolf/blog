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
				'Lead developer for BigCommerce and Shopify Plus ecommerce projects for mid-to-large B2B and B2C clients across a variety of industries, including manufacturing, distribution, and retail.',
				'Collaborate closely with cross-functional teams including designers, project managers, marketers, and external stakeholders to deliver high-quality ecommerce solutions that meet business goals and user needs.',
				'Architect and implement custom themes, apps, and integrations on BigCommerce and Shopify platforms using platform .',
				'Optimize website performance, accessibility, and SEO to enhance user experience and drive organic traffic growth.',
				'Mentor junior developers and conduct code reviews to ensure adherence to best practices and maintain high code quality standards.',
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
