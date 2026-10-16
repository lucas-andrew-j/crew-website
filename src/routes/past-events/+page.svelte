<script>
    import default_background from '$lib/assets/default_background.jpg';
    import EventCard from "$lib/components/EventCard.svelte";
    import { Separator } from "$lib/components/ui/separator/index.js";

    let { data } = $props();

    const eventsByYear = $derived(Map.groupBy(data.eventsWithThumbnails, (event) => event.startDateTime.toLocaleDateString('en-US', { year: 'numeric', timeZone: 'America/Los_Angeles' })));
</script>

<svelte:head>
    <title>PAST EVENTS</title>
</svelte:head>

<main class="flex flex-1 justify-center">
    <img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
         class="fixed inset-0 -z-10 h-full w-full object-cover" />
    <div class="p-8 bg-cover bg-center flex flex-col">
        <div class="prose">
            <h1 class="text-default-blue">Past Events</h1>
        </div>
        {#each [...eventsByYear] as [year, events]}
            <Separator class="my-4 bg-black"/>
            <div class="prose">
                <h2 class="text-default-blue">{year}</h2>
            </div>
            <div class="flex flex-row flex-wrap gap-4 max-w-[75rem]">
                {#each events as event (event.id)}
                    <EventCard {event}/>
                {/each}
            </div>
        {/each}
    </div>
</main>