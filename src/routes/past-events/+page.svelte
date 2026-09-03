<script>
    import default_background from '$lib/assets/default_background.jpg';
    import EventCard from "$lib/components/EventCard.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>PAST EVENTS</title>
</svelte:head>

<main class="flex flex-1 justify-center">
    <img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
         class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="p-8 bg-cover bg-center flex flex-col">
        {#each data.events as event (event.id)}
            <EventCard {event}/>
        {/each}
    </div>
</main>