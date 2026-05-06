<script lang="ts">
	import Section from './Section.svelte';

	const entries: Array<{
		title: string;
		description: string;
		points?: Array<string>;
		url: string;
	}> = [
		{
			title: 'Lethbridge Northern Irrigation District Website',
			url: 'lnid.ca',
			description:
				'Designed, architected, and implemented a greenfield information portal using SvelteKit and Strapi CMS for a public agency, replacing an outdated legacy system with a modern, maintainable, and performant web presence.',
			points: [
				'Gathered and aligned on project requirements through stakeholder interviews and feedback sessions.',
				'Prototyped site in Figma with comprehensive wireframes and full-color page mocks.',
				'Set up development infrastructure with CMS and database running on private VPS. Deployed previews to Netlify on each push.',
			],
		},
		{
			title: 'Ballymore Safety Products B2B BigCommerce Stencil Theme',
			url: 'ballymore.com',
			description:
				'Added multiple features and customizations to a base BigCommerce Stencil theme.',
			points: [
				'Replaced jQuery modals with browser-native dialog feature powered by handlebars.js snippets.',
				'Created parallel B2BEdition and Formstack quote systems to handle customer&apos;s complex quoting needs.',
				'Led catalog migration of 10,000+ SKUs, including theme modifications, migration scripts, and webhook-invoked AWS Lambda functions.',
			],
		},
		{
			title: 'Door County Coffee BigCommerce Stencil Theme',
			url: 'doorcountycoffee.com',
			description:
				'Scoped and led upgrade of subscription service integration to new API version.',
			points: [
				'Migrated site from deprecated web component solution to REST API integration.',
				'Developed custom frontend components for product and cart pages to present subscription options clearly to users.',
				'Developed upsell flow to add one-time items to next subscription order.',
			],
		},
	];
</script>

<Section heading="Projects">
	{#each entries as { title, url, description, points } (title)}
		<div>
			<h3>{title}</h3>
			<p><a href="https://{url}/" target="_blank" rel="noopener noreferrer">{url}</a></p>
			<p>{description}</p>
			{#if points?.length}
				<ul>
					{#each points as point (point)}
						<li>{point}</li>
					{/each}
				</ul>
			{/if}
</div>
		{/each}
</Section>
