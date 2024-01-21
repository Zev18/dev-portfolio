<script lang="ts">
	import Chip from '$lib/Projects/Chip.svelte';
	import type { work as workType } from '$lib/assets/data';
	import { capitalize } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	export let work: workType;
</script>

<div class="flex flex-col gap-2">
	<div class="grid sm:grid-cols-4 lg:grid-cols-6">
		<h4 class="text-lg lg:text-2xl">{work.year}</h4>
		<div class="col-span-3 flex flex-col lg:gap-4">
			<h3 class="text-2xl font-bold lg:text-4xl">{work.role}</h3>
			<div class="flex items-center gap-4">
				<h3 class="text-lg text-gray-600 dark:text-gray-400">{work.company}</h3>
				<a href={work.companyLink} class="-translate-y-[.05rem]">
					<ExternalLink size={18} />
				</a>
			</div>
			<p class="mt-2 text-gray-800 dark:text-gray-200 lg:text-lg">{work.summary}</p>
			<div class="my-2 flex flex-wrap gap-2 lg:gap-4">
				{#each work.stack as tech}
					<Chip main>{capitalize(tech)}</Chip>
				{/each}
			</div>
		</div>
	</div>
</div>
