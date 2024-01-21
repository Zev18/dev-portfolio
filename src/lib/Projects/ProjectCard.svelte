<script lang="ts">
	import type { project as projectType } from '$lib/assets/data';
	import { capitalize } from '$lib/utils';
	import { ExternalLink, Github } from 'lucide-svelte';
	import Chip from './Chip.svelte';
	export let project: projectType;
</script>

<div
	class="flex max-w-4xl flex-col overflow-hidden rounded-lg bg-white transition-all duration-200 dark:bg-gray-950 sm:grid sm:grid-cols-4 sm:flex-row sm:gap-4 sm:bg-transparent sm:p-4 sm:dark:bg-transparent lg:max-w-6xl lg:grid-cols-5"
>
	<img
		src={project.image}
		class=" max-h-[12rem] w-full self-center justify-self-center rounded-lg border-4 border-black object-cover dark:border-white sm:max-h-max lg:col-span-2"
		alt={project.name}
	/>
	<div
		class=" col-span-3 m-4 flex flex-col gap-4 rounded-lg bg-white transition-all duration-200 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 sm:p-4 lg:gap-6"
	>
		<div class="flex items-center justify-between gap-4">
			<h3 class="text-2xl font-bold lg:text-4xl">{capitalize(project.name)}</h3>
			<div
				class="flex items-center gap-6 rounded bg-black p-4 px-6 text-white dark:bg-white dark:text-black"
			>
				{#if project.githubLink}
					<a href={project.githubLink} target="_blank" rel="noreferrer">
						<Github />
					</a>
				{/if}
				{#if project.liveLink}
					<a href={project.liveLink} target="_blank" rel="noreferrer">
						<ExternalLink />
					</a>
				{/if}
			</div>
		</div>
		<div class="flex flex-wrap gap-2">
			<Chip main>{capitalize(project.type)}</Chip>
			{#each project.stack as tech}
				<Chip>{capitalize(tech)}</Chip>
			{/each}
		</div>
		<p class="px-2 text-gray-700 dark:text-gray-300 lg:text-lg">{project.description}</p>
	</div>
</div>
