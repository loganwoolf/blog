<script lang="ts">
	import Section from './Section.svelte';

	const skills: Record<string, string> = {
		'Languages and Frameworks':
			'NextJS, SvelteKit, JavaScript/TypeScript (including vanilla solutions), React, Svelte, Handlebars, CSS/SCSS, Tailwind, Strapi CMS, Postgres, SQLite.',
		'E-commerce':
			'BigCommerce (Stencil themes, REST & GraphQL APIs, storefront management, B2B Edition and APIs, platform app development), Shopify (Shopify 2.0 themes, storefront management), Google Tag Manager, Klaviyo.',
		'DevOps & Tools':
			'Git and GitHub, Linux and self-hosting, Netlify, Vercel, npm registry and library creation, CLI tool creation, Figma',
		Other: 'Web accessibility, Pagespeed analysis',
	};
</script>

<Section heading="technical skills">
	<ul>
		{#each Object.entries(skills) as [segment, content] (segment)}
			<li>
				<strong>{segment}:</strong>
				{content}
			</li>
		{/each}
	</ul>
</Section>
