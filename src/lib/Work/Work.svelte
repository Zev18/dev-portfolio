<script lang="ts">
	import { work } from '$lib/assets/data';
	import WorkEntry from './WorkEntry.svelte';
</script>

<section id="work" class="flex justify-center px-6">
	<div class="flex flex-col gap-4 lg:gap-8 xl:max-w-[90%]">
		<h2 class="text-5xl font-bold xl:mb-10 xl:text-[5rem]">Work</h2>
		<div class="flex flex-col gap-4 self-center lg:gap-10 xl:max-w-[80%] xl:gap-16">
			{#each work as work}
				<WorkEntry {work} />
			{/each}
		</div>
	</div>
</section>
