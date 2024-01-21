<script>
	import Footer from '$lib/Footer/Footer.svelte';
	import Overlay from '$lib/Overlay/Overlay.svelte';
	import '../app.css';
</script>

<div class="noise" />
<div
	class="flex h-full min-h-screen w-full flex-col items-center text-black transition-all duration-150 dark:bg-gray-950 dark:text-white"
>
	<main class="background h-full w-full max-w-[3000px] grow">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.background {
		background: radial-gradient(circle, var(--dot-color) 7%, transparent 8%);
		background-size: 1.5em 1.5em;
		opacity: 1;
	}

	.noise {
		position: fixed;
		z-index: 9999;
		top: -300%;
		left: -150%;
		height: 600%;
		width: 600%;
		-webkit-animation: grain 7s steps(10) infinite;
		animation: grain 10s steps(10) infinite;
		background-image: url('../lib/assets/images/noise.png');
		background-size: 300px;
		background-repeat: repeat;
		opacity: 0.1;
		pointer-events: none;
	}

	@keyframes grain {
		0%,
		100% {
			transform: translate(0);
		}
		10% {
			transform: translate(-5%, -10%);
		}
		20% {
			transform: translate(-15%, 5%);
		}
		30% {
			transform: translate(7%, -25%);
		}
		40% {
			transform: translate(-5%, 25%);
		}
		50% {
			transform: translate(-15%, 10%);
		}
		60% {
			transform: translate(-15%);
		}
		70% {
			transform: translate(15%);
		}
		80% {
			transform: translate(3%, 35%);
		}
		90% {
			transform: translate(-10%, 10%);
		}
	}
</style>
