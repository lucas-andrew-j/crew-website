<script>
	import venturing_background from '$lib/assets/venturing_background.jpg';
</script>

<svelte:head>
	<title>VENTURING</title>
</svelte:head>

<main class="flex-col flex-1 justify-center">
	<img src={venturing_background} alt="looking up at mt adams" fetchpriority="high"
			 class="absolute inset-0 -z-10 h-full w-full object-cover" />
	<div class="prose mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8 [&_p]:text-white">
		<h1 class="text-white">VENTURING: Crew 1548</h1>
		<p>Venturing is a youth-led leadership program that is designed for young adults that want to test their limits and
			expand the bounds of what is possible. Crew 1548 was formed to connect friends and family around high
			adventure.</p>
		<p>The Venturing program is divided into four areas: Adventure, Leadership, Personal Growth, and Service. Each of
			these
			pillars represent a unique aspect of the Venturing program. In a Crew’s program, the focus is to provide
			opportunities in all four areas.</p>
		<p>Crew 1548 works very closely with Olympic Adventure Experience. Their main focus is mountaineering.</p>
	</div>
</main>