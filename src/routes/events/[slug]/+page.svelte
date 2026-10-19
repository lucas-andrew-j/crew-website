<script>
	import default_background from '$lib/assets/default_background.jpg';
	import * as Carousel from "$lib/components/ui/carousel/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";

	let { data } = $props();

	let open = $state(false);
	let activeIndex = $state(0);
	let carouselApi = $state();

	let images = $state([]);
	let loading = $state(true);
	let failed = $state(false);

	$effect(() => {
		let canceled = false;
		images = [];
		loading = true;
		failed = false;

		(async () => {
			try {
				let page = data.firstPage;
				while (page && !canceled) {
					const { images: batch, next } = await page;
					if (canceled) return;
					images.push(...batch);
					page = next;
				}
			} catch (error) {
				if (!canceled) failed = true;
			} finally {
				if (!canceled) loading = false;
			}
		})();

		return () => { canceled = true; }
	});

	function handleCarouselKeydown(e) {
		if (e.key === 'ArrowLeft') {
			e.preventDefault(); carouselApi?.scrollPrev();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault(); carouselApi?.scrollNext();
		}
	}
</script>

<svelte:head>
	<title>{data.event.name}</title>
</svelte:head>

<main class="flex flex-1 justify-center">
	<img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover" />
	<div class="p-8 bg-cover bg-center flex flex-col">
		<div class="prose mx-auto">
			<h1 class="text-default-blue">{data.event.name}</h1>
		</div>
		<div class="flex flex-row flex-wrap gap-4 max-w-[75rem]">
			{#each images as urls, i}
				<img src="{urls.thumbnailUrl}"
					class="object-cover w-72 h-48 cursor-pointer"
					onclick={() => { activeIndex = i; open = true; }}
					loading="lazy"/>
			{/each}
		</div>
		{#if loading}
			Loading images...
		{:else if failed}
			Failed to load some images...
		{/if}
	</div>
	<Dialog.Root bind:open>
		<Dialog.Content class="flex flex-col top-0 left-0 translate-x-0 translate-y-0 w-screen h-screen max-w-none sm:max-w-none p-0 bg-transparent"
										onclick={(e) => { if (!e.target.closest('img, button')) open = false; }}
										onkeydown={handleCarouselKeydown}>
			{#key activeIndex}
				<Carousel.Root opts="{{ startIndex: activeIndex }}" class="h-full flex" setApi={(api) => (carouselApi = api)}>
					<Carousel.Content class="h-full">
						{#each images as urls}
							<Carousel.Item class="h-full flex items-center justify-center">
								<img src="{urls.largestImageUrl}" class="max-h-full max-w-full object-contain " loading="lazy"/>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="start-4 text-white" />
					<Carousel.Next class="end-4 text-white" />
				</Carousel.Root>
			{/key}
		</Dialog.Content>
	</Dialog.Root>
</main>