<script lang="ts">
	import Section from './Section.svelte';

	function getYearsSince(refDate: Date) {
		return Math.floor((Date.now() - +refDate) / (1000 * 60 * 60 * 24 * 365));
	}
</script>

<Section heading="Summary">
	<p>
		Web Developer with {getYearsSince(new Date('2022-01-01'))} years of experience building for ecommerce platforms
		and public agencies. Skilled in React, Svelte, Node.js, and modern templating languages, equally comfortable
		delivering custom themes, apps, integrations, and greenfield projects from scratch. Builds tools and workflows
		that streamline operations for teams and clients, from migration scripts to CLI utilities. Collaborates with
		stakeholders and designers to build systems that work and look great.
	</p>
</Section>
