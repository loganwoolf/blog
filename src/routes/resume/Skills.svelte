<script lang="ts">
	import Section from './Section.svelte';

	const skills: Array<{
		segment: string;
		content: string;
	}> = [
		{
			segment: 'Languages and Frameworks',
			content:
				'NextJS, SvelteKit, JavaScript/TypeScript (including vanilla solutions), React, Svelte, Handlebars, CSS/SCSS, Tailwind, Strapi CMS, Postgres, SQLite.'
		},
		{
			segment: 'E-commerce',
			content:
				'BigCommerce (Stencil themes, REST & GraphQL APIs, storefront management, B2B Edition and APIs, platform app development), Shopify (Shopify 2.0 themes, storefront management), Google Tag Manager, Klaviyo.'
		},
		{
			segment: 'DevOps & Tools',
			content:
				'Git and GitHub, Linux and self-hosting, Netlify, Vercel, npm registry and library creation, CLI tool creation, Figma'
		},
		{
			segment: 'Other',
			content: 'Web accessibility, Pagespeed analysis'
		}
	];
</script>

<Section heading="Skills">
	<ul>
		{#each skills as skill (skill.segment)}
			<li>
				<strong>{skill.segment}:</strong>
				{skill.content}
			</li>
		{/each}
	</ul>
</Section>
