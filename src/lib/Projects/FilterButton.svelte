<script lang="ts">
	export let selectedVal: string;
	export let vals: string[];
	export let isAlt = false;
	import { Popover } from 'bits-ui';
	import { capitalize, cn } from '$lib/utils';
	import { flyAndScale } from '$lib/transitions/transitions';
	import { Plus } from 'lucide-svelte';

	let iconSize = 18;
	let open = false;
</script>

<Popover.Root bind:open>
	<Popover.Trigger
		class={cn(
			'bg:text-black rounded-full border-2 border-black p-1 px-2 text-sm dark:border-white dark:bg-white lg:p-2  lg:px-4 lg:text-lg ',
			isAlt
				? 'bg-black text-white dark:bg-white dark:text-black'
				: 'bg-white dark:bg-gray-950 dark:text-white'
		)}
	>
		{#if selectedVal}
			{capitalize(selectedVal)}
		{:else}
			<Plus size={iconSize} class="lg:h-6 lg:w-6" />
		{/if}
	</Popover.Trigger>
	<Popover.Content
		class="grid grid-cols-2 gap-2  rounded-xl  border-4 border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950 dark:text-white"
		transition={flyAndScale}
		sideOffset={10}
	>
		{#each vals as type}
			<button
				class={isAlt
					? cn(
							'max-w-min self-center justify-self-center rounded-xl border-2 border-black bg-white p-2 py-1 text-sm dark:border-white dark:bg-black lg:text-base',
							selectedVal == type && 'bg-black text-white dark:bg-white dark:text-black'
						)
					: cn(
							'max-w-min self-center justify-self-center rounded-xl border-2 border-black bg-black p-2 py-1 text-sm text-white dark:border-black dark:bg-white dark:text-black lg:text-base',
							selectedVal == type &&
								'bg-white text-black dark:border-white dark:bg-black dark:text-white'
						)}
				on:click={() => {
					if (selectedVal == type) {
						selectedVal = '';
					} else {
						selectedVal = type;
					}
					open = false;
				}}
			>
				{capitalize(type)}
			</button>
		{/each}
	</Popover.Content>
</Popover.Root>
