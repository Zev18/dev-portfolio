<script>
	import About from '$lib/About/About.svelte';
	import Blog from '$lib/Blog/Blog.svelte';
	import Overlay from '$lib/Overlay/Overlay.svelte';
	import Projects from '$lib/Projects/Projects.svelte';
	import Title from '$lib/Title/Title.svelte';
	import Work from '$lib/Work/Work.svelte';
</script>

<Overlay />
<div class="flex w-full flex-col pb-[30%] sm:px-2 md:px-6">
	<Title />
	<About />
	<Projects />
	<Work />
	<Blog />
</div>
