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
				'Formstack\'s one-form-per-page limit was blocking their multi-brand setup. Reverse-engineered undocumented APIs to enable simultaneous quote request flows.',
				'jQuery modals were slow and a maintenance burden. Replaced with server-rendered browser-native dialogs that opened with content instantly—composable in a React-like way.',
				'Migrated 10,000+ SKUs with theme modifications, migration scripts, and webhook-triggered Lambda functions.',
			],
		},
		{
			title: 'Door County Coffee BigCommerce Stencil Theme',
			url: 'doorcountycoffee.com',
			description:
				'Scoped and led upgrade of subscription service integration to new API version.',
			points: [
				'Ordergroove was injecting production-only scripts in production, causing bugs in development. Diagnosed issue, ported scripts into theme with full visibility. Eliminated gremlins, gave team control for safer development.',
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
