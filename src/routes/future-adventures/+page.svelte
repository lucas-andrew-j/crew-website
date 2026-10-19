<script lang="ts">
    import default_background from '$lib/assets/default_background.jpg';

    let { data } = $props();

    const eventsByYear = $derived(
      Map.groupBy(
        data.events,
        (event) => event.startDateTime.toLocaleDateString('en-US', { year: 'numeric', timeZone: 'America/Los_Angeles' }
        )
      )
    );

    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' });
    const yearFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone: 'America/Los_Angeles' });

    function formatDateRange(start: Date, end: Date) {
        if (yearFormat.format(start) !== yearFormat.format(end)) {
            return `${dateFormat.format(start)} – ${dateFormat.format(end)}`;
        }
        return dateFormat.formatRange(start, end);
    }
</script>

<svelte:head>
    <title>FUTURE ADVENTURES</title>
</svelte:head>

<main class="flex flex-1 justify-center">
    <img src={default_background} alt="looking north at Mt Hood, Mt Adams, and Mt St Helens" fetchpriority="high"
         class="fixed inset-0 -z-10 h-full w-full object-cover" />
    <div class="prose prose-h2:my-0 prose-p:my-0 p-8 bg-cover bg-center">
        <h1 class="text-default-blue">Future Adventures</h1>
        {#each [...eventsByYear] as [year, yearEvents]}
            <h2>{year}</h2>
                {#each yearEvents as event}
                    <p>{formatDateRange(event.startDateTime, event.endDateTime)}: {event.name}</p>
                {/each}
        {/each}
    </div>
</main>