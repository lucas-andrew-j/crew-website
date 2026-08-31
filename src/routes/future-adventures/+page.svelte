<script>
    import default_background from '$lib/assets/default_background.jpg';

    let { data } = $props();
</script>

<title>FUTURE ADVENTURES</title>
<main class="flex flex-1 justify-center items-center">
    <img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
         class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="p-8 bg-cover bg-center flex flex-col items-center justify-center bg-black/50">
        {#each data.events as event (event.id)}
            <h2>{event.name}</h2>
        {/each}
    </div>
</main>