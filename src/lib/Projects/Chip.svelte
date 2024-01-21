<script lang="ts">
	import { cn } from '$lib/utils';

	export let main = false;
</script>

<div
	class={cn(
		'max-w-fit rounded-full border-2 border-black p-1 px-2 text-xs dark:border-white dark:text-white lg:p-2 lg:px-4 lg:text-base',
		main
			? 'bg-black text-white dark:bg-white dark:text-black'
			: 'border-gray-600 dark:border-gray-400'
	)}
>
	<slot />
</div>
