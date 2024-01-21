<script lang="ts">
	import { ArrowUpToLine, Moon, Sun } from 'lucide-svelte';
	import { browser } from '$app/environment';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import NavLink from './NavLink.svelte';

	const systemTheme = browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
	let currTheme = systemTheme ? 'dark' : 'light';

	gsap.registerPlugin(ScrollTrigger);

	let name: HTMLAnchorElement;
	let button: HTMLButtonElement;
	let bar: HTMLDivElement;

	const switchTheme = () => {
		if (currTheme == 'dark') {
			document.documentElement.classList.remove('dark');
			currTheme = 'light';
		} else {
			document.documentElement.classList.add('dark');
			currTheme = 'dark';
		}
	};

	let scrollUpFunction: () => void;

	onMount(() => {
		let navLinks = document.querySelectorAll('.mask');

		gsap.fromTo(
			name,
			{
				opacity: 0,
				y: '-50%',
				rotateX: 90
			},
			{
				scrollTrigger: {
					trigger: '#about',
					start: 'top 10%',
					toggleActions: 'restart none none reverse'
				},
				opacity: 1,
				y: 0,
				rotateX: 0,
				duration: 0.2
			}
		);

		gsap.to(button, {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 10%',
				toggleActions: 'restart none none reverse'
			},
			opacity: 1,
			y: 0,
			duration: 0.5
		});

		gsap.to(bar, {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 10%',
				toggleActions: 'restart none none reverse'
			},
			y: 0
		});

		gsap.fromTo(
			navLinks,
			{
				width: '0%'
			},
			{
				scrollTrigger: {
					trigger: '#about',
					start: 'top 10%',
					toggleActions: 'restart none none reverse'
				},
				width: '100%',

				stagger: 0.1,
				duration: 0.3
			}
		);

		scrollUpFunction = () => {
			history.pushState('', document.title, window.location.pathname + window.location.search);
			document.body.scrollIntoView();
		};
	});
</script>

<div class="pointer-events-none fixed inset-0 flex h-full w-full flex-col justify-between">
	<div
		bind:this={bar}
		class="absolute z-0 h-16 w-full -translate-y-[100%] bg-white dark:bg-gray-950"
	/>
	<div class="flex justify-center">
		<div
			class="z-10 flex w-full max-w-[3000px] items-center justify-between p-6 py-4 lg:max-w-[90%]"
		>
			<div class="flex items-center gap-16">
				<div class="container flex max-w-fit items-center opacity-100">
					<a
						bind:this={name}
						href="/"
						class="pointer-events-auto max-w-fit text-2xl font-bold opacity-0 lg:text-4xl"
					>
						Zev Ross
					</a>
				</div>
				<div class="pointer-events-auto hidden items-center gap-8 lg:flex">
					<NavLink slug="about" />
					<NavLink slug="projects" />
					<NavLink slug="work" />
				</div>
			</div>
			<button
				class={cn(
					'pointer-events-auto transition-all duration-150 hover:opacity-80',
					browser ? 'opacity-100' : 'opacity-0'
				)}
				on:click={switchTheme}
			>
				{#if currTheme == 'dark'}
					<Sun />
				{:else}
					<Moon />
				{/if}
			</button>
		</div>
	</div>
	<div class="flex w-full justify-center">
		<div class="flex w-full flex-row-reverse p-4 lg:p-10 xl:max-w-[70%]">
			<button
				on:click={scrollUpFunction}
				bind:this={button}
				class="pointer-events-auto translate-y-[300%] rounded bg-white p-3 opacity-0 dark:bg-gray-950"
			>
				<ArrowUpToLine />
			</button>
		</div>
	</div>
</div>

<style>
	.container {
		perspective: 100px;
		perspective-origin: center;
	}
</style>
