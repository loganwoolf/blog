<script lang="ts">
	import Section from './Section.svelte';

	const skills: Record<string, string> = {
		'Languages and Frameworks':
			'NextJS, SvelteKit, JavaScript/TypeScript (including vanilla solutions), React, Svelte, Handlebars, CSS/SCSS, Tailwind, Strapi CMS, Postgres, SQLite.',
		'E-commerce':
			'BigCommerce (Stencil themes, REST & GraphQL APIs, storefront/catalog management, B2B Edition and APIs, platform app development), Shopify (Shopify 2.0 themes, storefront management), Google Tag Manager, Klaviyo.',
		'DevOps & Tools':
			'git and GitHub, Linux, SSH, self-hosting (pm2, nginx), cloud deployment (Netlify, Vercel), AWS (SNS, Lambda), npm registry and library creation, automation via scripting, Figma, Claude code.',
		Other: 'Web accessibility and responsiveness, Pagespeed analysis and optimization.',
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
