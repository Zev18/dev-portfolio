<script>
	import Photo from '$lib/assets/images/zev.webp';
</script>

<section id="about" class="flex justify-center px-6">
	<div class="flex w-full flex-col gap-4 xl:max-w-[90%]">
		<h2 class="text-5xl font-bold xl:mb-10 xl:text-[5rem]">About me</h2>
		<div class="flex w-full flex-col gap-4 sm:grid sm:grid-cols-3 sm:gap-8 2xl:px-[5%]">
			<img
				src={Photo}
				alt="A self-portrait of Zev Ross"
				class="lgmax-w-xl max-h-[10rem] max-w-full overflow-hidden rounded-lg object-cover sm:max-h-max sm:justify-self-end"
			/>
			<div class="col-span-2 flex flex-col gap-4">
				<h3
					class="rounded bg-black p-4 py-2 text-xl text-white dark:bg-white dark:text-black lg:p-6 lg:px-8 lg:text-3xl xl:text-4xl"
				>
					My name is Zev Ross, and I'm a full-stack developer specializing in React.
				</h3>
				<p class="max-w-prose px-2 lg:text-lg">
					I'm a developer from the California bay area with professional experience in both frontend
					and backend development, using technologies such as NextJS, Ruby on Rails, Go, and more.
					When I'm not working on side projects, I enjoy drawing, skiing, studying foreign
					languages, and watching anime.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	img {
		object-position: 0 30%;
	}
</style>
