<script lang="ts">
	import { gsap } from 'gsap';
	import { MoveDown } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let menu: HTMLDivElement;

	onMount(() => {
		gsap.to(menu, {
			opacity: 1,
			y: 0,
			duration: 0.1,
			delay: 0.4
		});
	});
</script>

<div class="mb-10 w-full self-end justify-self-end">
	<div
		bind:this={menu}
		class="m-4 flex translate-y-2 flex-col gap-6 rounded bg-black p-8 text-white opacity-0 transition-all dark:bg-white dark:text-black"
	>
		<div class="flex justify-between text-lg underline underline-offset-4">
			<a href="#about">About</a>
			<a href="#projects">Projects</a>
			<a href="#work">Work</a>
		</div>
		<div class="flex items-center gap-4 text-gray-300 dark:text-gray-700">
			<p>Or just scroll down</p>
			<MoveDown />
		</div>
	</div>
</div>
