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
				'Designed, architected and implemented a greenfield information portal using SvelteKit and Strapi CMS, creating a modern, maintainable, and performant web presence for a public agency.',
			points: [
				'Consulted client on project requirements and estimated with high accuracy',
				'Designed site using Figma. Provided wireframes and full color mocks of each page',
				'Set up streamlined development infrastructure with CMS and Postgres running on private VPS, and frontend previews being deployed to Netlify on each push',
				'Buil'
			]
		},
		{
			title: 'Ballymore Safety Products B2B BigCommerce Theme',
			url: 'ballymore.com',
			description:
				'Added multiple features and customizations of a base BigCommerce stencil theme to meet client needs.',
			points: ['']
		},
		{
			title: 'Zagg Inc. BigCommerce Theme',
			url: 'zagg.com',
			description: '',
			points: ['']
		}
	];
</script>

<Section heading="Projects">
	<ul>
		{#each entries as { title, description, points }}
			<li>
				<h3>{title}</h3>
				<p>{description}</p>
				{#if points?.length}
					<ul>
						{#each points as point}
							<li>{point}</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</Section>
