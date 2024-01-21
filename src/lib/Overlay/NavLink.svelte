<script lang="ts">
	import { capitalize } from '$lib/utils';

	export let slug: string;
</script>

<div>
	<div class="mask w-0 overflow-hidden">
		<a
			href="#{slug}"
			class="mx-2 opacity-70 transition-all duration-200 hover:opacity-100 2xl:text-lg"
		>
			{capitalize(slug)}
		</a>
	</div>
	<p class="pointer-events-none h-0 opacity-0">{capitalize(slug)}</p>
</div>
