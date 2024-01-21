<script lang="ts">
	import { onMount } from 'svelte';
	import PostCard from './PostCard.svelte';
	import type { DevPost } from '$lib/types';

	const getPosts = async () => {
		const res = await fetch('https://dev.to/api/articles?username=zevro');
		const data = await res.json();
		return data;
	};

	let posts: DevPost[] = [];
	onMount(async () => {
		posts = await getPosts();
	});
</script>

<section id="blog" class="flex flex-col items-center px-6">
	<div class="mb-4 flex w-full max-w-[90%] flex-col gap-4">
		<h2 class="text-5xl font-bold xl:mb-10 xl:text-[5rem]">Blog</h2>
		<p class="mb-4 px-2 text-gray-700 dark:text-gray-300 lg:text-lg">
			I write occasionally about my web dev journey, and about the things I've learned along the
			way.
		</p>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:gap-10">
		{#await posts then posts}
			{#each posts as post}
				<PostCard {post} />
			{/each}
		{/await}
		<div
			class="flex items-center justify-center rounded-lg bg-black/10 p-4 text-gray-700 backdrop-blur-sm dark:bg-white/10 dark:text-gray-300 lg:rounded-xl lg:p-8 lg:text-lg"
		>
			More to come...
		</div>
	</div>
</section>
