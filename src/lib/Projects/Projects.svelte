<script lang="ts">
	import type { tech, projectType } from '$lib/assets/data';
	import { projects } from '$lib/assets/data';
	import { Filter, X } from 'lucide-svelte';
	import FilterButton from './FilterButton.svelte';
	import ProjectCard from './ProjectCard.svelte';

	let typeOptionsSet = new Set<string>();
	let techOptionsSet = new Set<tech>();
	projects.forEach((project) => {
		if (project.type) typeOptionsSet.add(project.type);
		if (project.stack) project.stack.forEach((tech) => techOptionsSet.add(tech));
	});
	const typeOptions = Array.from(typeOptionsSet).sort();
	const techOptions = Array.from(techOptionsSet).sort();
	let selectedType: projectType | '' = '';
	let selectedTech: tech | '' = '';

	const clearFilter = () => {
		selectedType = '';
		selectedTech = '';
	};
</script>

<section id="projects" class="flex justify-center px-6">
	<div class="flex w-full flex-col gap-6 xl:max-w-[90%]">
		<h2 class="text-5xl font-bold xl:mb-10 xl:text-[5rem]">Projects</h2>
		<div class="flex h-[2rem] items-center gap-4">
			<Filter class="lg:h-10 lg:w-10" />
			<div class="flex items-center gap-2">
				<FilterButton bind:selectedVal={selectedType} vals={typeOptions} isAlt />
				<FilterButton bind:selectedVal={selectedTech} vals={techOptions} />
			</div>
			{#if selectedType != '' || selectedTech != ''}
				<button on:click={clearFilter} class="text-black dark:text-white">
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
