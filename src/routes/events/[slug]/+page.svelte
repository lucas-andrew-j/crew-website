<script>
	import default_background from '$lib/assets/default_background.jpg';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.event.name}</title>
</svelte:head>

<main class="flex flex-1 justify-center">
	<img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover" />
	<div class="p-8 bg-cover bg-center flex flex-col">
		<div class="prose">
			<h1 class="text-default-blue">{data.event.name}</h1>
		</div>
		<div class="flex flex-row flex-wrap gap-4 max-w-[75rem]">
		{#each data.imageUrls as urls}
				<img src="{urls.thumbnailUrl}"
						 class="object-cover w-72 h-48"/>
		{/each}
		</div>
	</div>
</main>