<script>
	import venturing_background from '$lib/assets/about_background.jpg';
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import about_image_1 from "$lib/assets/about_image_1.jpg";
	import about_image_2 from "$lib/assets/about_image_2.jpg";
	import about_image_3 from "$lib/assets/about_image_3.jpg";
	import about_image_4 from "$lib/assets/about_image_4.jpg";

	const images = [about_image_1, about_image_2, about_image_3, about_image_4];

	let open = $state(false);
	let activeIndex = $state(0);
	let carouselApi = $state();

	function handleCarouselKeydown(e) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault(); carouselApi?.scrollPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault(); carouselApi?.scrollNext();
		}
	}
</script>

<svelte:head>
	<title>ABOUT</title>
</svelte:head>

<main class="flex-col flex-1 justify-center">
	<img src={venturing_background} alt="looking south from mt adams" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover" />
	<div class="prose mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8 [&_p]:text-default-blue">
		<h1 class="text-default-blue">About Olympic Adventure Experience</h1>
		<p>Olympic Adventure Experience (OAE) is a non-profit organization that helps facilitate leadership opportunities
			for local scouting organizations in the Kitsap County region. We seek to expand young people's comfort zones by
			challenging them physically and mentally in outdoor environments.</p>
		<p>OAE currently empowers Crew 1548 to reach higher levels of adventure.</p>
		<div class="flex flex-row flex-wrap gap-4 [&_img]:w-[20em] [&_img]:m-0">
			{#each images as src, i}
				<img {src} class="cursor-pointer" onclick={() => { activeIndex = i; open = true; }} />
			{/each}
		</div>
	</div>
	<Dialog.Root bind:open>
		<Dialog.Content class="flex flex-col top-0 left-0 translate-x-0 translate-y-0 w-screen h-screen max-w-none sm:max-w-none p-0 bg-transparent"
			onclick={(e) => { if (!e.target.closest('img, button')) open = false; }}
			onkeydown={handleCarouselKeydown}>
			{#key activeIndex}
				<Carousel.Root opts="{{ startIndex: activeIndex }}" class="h-full flex" setApi={(api) => (carouselApi = api)}>
					<Carousel.Content class="h-full">
						{#each images as src}
							<Carousel.Item class="h-full flex items-center justify-center"><img {src} class="max-h-full max-w-full object-contain "/></Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="start-4 text-white" />
					<Carousel.Next class="end-4 text-white" />
				</Carousel.Root>
			{/key}
		</Dialog.Content>
	</Dialog.Root>
</main>