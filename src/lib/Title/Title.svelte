<script>
	import { browser } from '$app/environment';
	import { gsap } from 'gsap';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { socials } from '../assets/data';
	import { Mail } from 'lucide-svelte';
	import Menu from './Menu.svelte';
	import { cn } from '$lib/utils';

	gsap.registerPlugin(TextPlugin);
	onMount(() => {
		const splitText = new SplitType('#title');
		gsap.fromTo(
			'.char',
			{
				opacity: 0,
				y: 20,
				rotateX: -20,
				stagger: 0.05
			},
			{
				opacity: 1,
				y: 0,
				rotateX: 0,
				stagger: 0.05
			}
		);
	});
</script>

<section class="flex min-h-[100vh] justify-center lg:items-stretch">
	<div class="mt-18 m-4 grid grow grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-1 xl:max-w-[90%]">
		<div class="flex flex-col gap-4">
			<div>
				<h1
					class={cn(
						'text-[7rem] font-bold leading-[1] text-black opacity-100 dark:text-white lg:mt-[20%] xl:text-[10rem]'
					)}
					id="title"
				>
					Zev Ross
				</h1>
				<p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
					I'm a full-stack web dev, and this is my portfolio.
				</p>
			</div>
			<div class="flex w-full items-center justify-between lg:mt-[10%] lg:max-w-xl">
				<div class="mx-2 my-6 flex items-center gap-6">
					{#each socials as { name, link, icon }}
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							class="transition-all duration-150 hover:opacity-80"
						>
							<svelte:component this={icon} class="lg:h-8 lg:w-8" />
						</a>
					{/each}
				</div>
				<a
					href="mailto:zevross@gmail.com"
					class="flex items-center gap-3 rounded-xl border-2 border-black p-2 px-4 transition-all duration-150 hover:opacity-80 dark:border-white lg:text-lg"
				>
					<p>Email</p>
					<Mail />
				</a>
			</div>
		</div>
		<Menu />
	</div>
</section>

<style>
	#title {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}
</style>
