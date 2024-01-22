<script lang="ts">
	import { work } from '$lib/assets/data';
	import { ArrowDownToLine } from 'lucide-svelte';
	import WorkEntry from './WorkEntry.svelte';
	import resume from '$lib/assets/resume.pdf';
</script>

<section id="work" class="flex justify-center px-6">
	<div class="flex flex-col gap-4 lg:gap-8 xl:max-w-[90%]">
		<h2 class="text-5xl font-bold xl:text-[5rem]">Work</h2>
		<a
			href={resume}
			class="trasition-all flex max-w-fit items-center gap-4 rounded-full border-2 border-black p-2 px-4 duration-200 hover:scale-95 hover:opacity-80 dark:border-white lg:text-xl xl:mb-10"
			download="Ross, Zev - Resume">Download Resume <ArrowDownToLine /></a
		>
		<div class="flex flex-col gap-4 self-center lg:gap-10 xl:max-w-[80%] xl:gap-16">
			{#each work as work}
				<WorkEntry {work} />
			{/each}
		</div>
	</div>
</section>
