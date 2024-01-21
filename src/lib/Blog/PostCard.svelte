<script lang="ts">
	import type { DevPost } from '$lib/types';

	export let post: DevPost;
</script>

<a
	class="flex max-w-2xl flex-col gap-4 rounded-lg bg-black p-4 text-white dark:bg-white dark:text-black lg:rounded-xl lg:p-8"
	href={post.url}
>
	<h3 class="text-2xl font-bold lg:text-4xl">{post.title}</h3>
	<div class="flex gap-4">
		<img src={post.social_image} class="max-w-[30%] rounded object-contain" alt={post.title} />
		<p class="text-gray-300 dark:text-gray-700 lg:text-lg">{post.description}</p>
	</div>
</a>
