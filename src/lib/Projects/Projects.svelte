<script lang="ts">
	import type { projectType, tech } from '$lib/assets/data';
	import { projects } from '$lib/assets/data';
	import { flyAndScale } from '$lib/transitions/transitions';
	import { capitalize } from '$lib/utils';
	import { Popover } from 'bits-ui';
	import { Filter, X } from 'lucide-svelte';
	import Chip from './Chip.svelte';
	import ProjectCard from './ProjectCard.svelte';

	let typeOptionsSet = new Set<projectType>();
	let techOptionsSet = new Set<tech>();
	projects.forEach((project) => {
		if (project.type) typeOptionsSet.add(project.type);
		if (project.stack) project.stack.forEach((tech) => techOptionsSet.add(tech));
	});
	const typeOptions: projectType[] = Array.from(typeOptionsSet).sort();
	const techOptions: tech[] = Array.from(techOptionsSet).sort();
	let selectedType: projectType | '' = '';
	let selectedTech: tech | '' = '';

	const clearFilter = () => {
		selectedType = '';
		selectedTech = '';
	};

	let open = false;
</script>

<section id="projects" class="flex justify-center px-6">
	<div class="flex w-full flex-col gap-6 xl:max-w-[90%]">
		<h2 class="text-5xl font-bold xl:mb-10 xl:text-[5rem]">Projects</h2>
		<div class="flex h-[2rem] items-center gap-4">
			<Popover.Root bind:open>
				<Popover.Trigger
					class="flex items-center gap-2 transition-all  duration-200 hover:scale-95 hover:opacity-80"
				>
					<Filter class="lg:h-10 lg:w-10" />
					{#if selectedType}
						<Chip main>{capitalize(selectedType)}</Chip>
					{/if}
					{#if selectedTech}
						<Chip>{capitalize(selectedTech)}</Chip>
					{/if}
					{#if !selectedType && !selectedTech}
						<p class="ml-2 text-lg tracking-wider">Filter...</p>
					{/if}
				</Popover.Trigger>
				<Popover.Content
					class="flex max-w-[90vw] flex-col gap-4 overflow-hidden rounded-xl border-4 border-gray-100 bg-white p-4 dark:border-gray-900 dark:bg-gray-950 dark:text-white sm:max-w-sm"
					transition={flyAndScale}
					sideOffset={10}
				>
					<h3 class="text-xl font-bold lg:text-2xl">Filter</h3>
					<div class="flex flex-col gap-2">
						<p class="text-lg">Type</p>
						<div class="flex flex-wrap gap-2">
							{#each typeOptions as type}
								<button
									on:click={() =>
										selectedType == type ? (selectedType = '') : (selectedType = type)}
								>
									<Chip main={selectedType !== type}>
										{capitalize(type)}
									</Chip>
								</button>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-4">
						<p class="text-lg">Tech</p>
						<div class="flex flex-wrap gap-2">
							{#each techOptions as tech}
								<button
									on:click={() =>
										selectedTech == tech ? (selectedTech = '') : (selectedTech = tech)}
								>
									<Chip main={selectedTech == tech}>
										{capitalize(tech)}
									</Chip>
								</button>
							{/each}
						</div>
					</div>
				</Popover.Content>
			</Popover.Root>
			{#if selectedType != '' || selectedTech != ''}
				<button
					on:click={clearFilter}
					class="text-black transition-all duration-200 hover:scale-95 hover:opacity-80 dark:text-white"
				>
					<X class="lg:h-10 lg:w-10" />
				</button>
			{/if}
		</div>
		<div class="flex flex-wrap justify-center gap-6 self-center lg:gap-10">
			{#each projects as project}
				{#if (selectedType == '' || project.type == selectedType) && (selectedTech == '' || project.stack.includes(selectedTech))}
					<ProjectCard {project} />
				{/if}
			{/each}
		</div>
	</div>
</section>
