<script lang="ts">
	import Section from './Section.svelte';

	const skills: Record<string, string> = {
		'Languages and Frameworks':
			'NextJS, SvelteKit, JavaScript/TypeScript, React, Svelte, Handlebars, CSS/SCSS, Tailwind, Postgres, SQLite.',
		'BigCommerce': 'Stencil themes, REST & GraphQL APIs, storefront/catalog management, B2B Edition, platform app development.',
		'Shopify': 'Shopify 2.0 themes, storefront/catalog/app management.',
		'Other Platforms': 'ShareTribe, Strapi CMS, Klaviyo, Ordergroove.',
		'DevOps & Tools':
			'git and GitHub, Linux, SSH, self-hosting (pm2, nginx), cloud deployment (Netlify, Vercel), AWS (SNS, Lambda), npm registry and library creation, automation via scripting, Figma, Claude Code, Codex, MCP.',
		'Core Web': 'Web accessibility and responsiveness, Pagespeed analysis and optimization.',
	};
</script>

<Section heading="Technical Skills">
	<ul>
		{#each Object.entries(skills) as [segment, content] (segment)}
			<li>
				<strong>{segment}:</strong>
				{content}
			</li>
		{/each}
	</ul>
</Section>
