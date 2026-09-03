<script>
	import home_background from '$lib/assets/home_background.jpg';
</script>

<svelte:head>
	<title>HOME</title>
</svelte:head>

<main class="flex flex-1 justify-center items-center">
	<img src={home_background} alt="people camping on snow" fetchpriority="high"
			 class="absolute inset-0 -z-10 h-full w-full object-cover" />
	<div class="p-8 bg-cover bg-center flex flex-col items-center justify-center bg-black/50">
		<div class="text-3xl font-black text-white tracking-widest mb-12">
			LEAD THE ADVENTURE
		</div>
		<a
			class="text-center content-center text-white no-underline border border-white min-w-[11em] min-h-[4em] mt-[1.5em] hover:text-black hover:bg-white transition duration-300"
			href="/about">
			ABOUT
		</a>
	</div>
</main>