<script lang="ts">
    import default_background from '$lib/assets/default_background.jpg';
    import EventCard from "$lib/components/EventCard.svelte";

    let { data } = $props();

    let eventMonths: number[][] = [];
    let month = 0;

    for (let i = 0; i < data.events.length; i++) {
        if (i == 0) {
            eventMonths[month] = [];
            eventMonths[month].push(i);
        } else if (new Date(data.events[i].startDateTime).getMonth() === new Date(data.events[i - 1].startDateTime).getMonth()) {
            eventMonths[month].push(i);
        } else {
            month++;
            eventMonths[month] = [];
            eventMonths[month].push(i);
        }
    }
</script>

<title>FUTURE ADVENTURES</title>
<main class="flex flex-1 justify-center">
    <img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
         class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div class="p-8 bg-cover bg-center flex flex-col">
        {#each eventMonths as eventMonth}
            <h2>{data.events[eventMonth[0]].startDateTime.toLocaleString('default', { month: 'long'})}</h2>
            {#each eventMonth as event}
                <EventCard event={data.events[event]}/>
            {/each}
        {/each}
    </div>
</main>