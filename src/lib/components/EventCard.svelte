<script lang="ts">
    import RiLandscapeLine from 'remixicon-svelte/icons/landscape-line';

    let { event } = $props();
</script>

<div class="w-72">
    {#if event.thumbnailUrl}
        <img src="{event.thumbnailUrl}" alt="thumbnail image for {event.name}"
            class="object-cover w-full h-48"/>
    {:else}
        <div class="flex items-center justify-center h-48 bg-gray-200">
            <RiLandscapeLine class="size-16 text-gray-500" />
        </div>
    {/if}
    <div class="prose">
        <h3>{event.name} - {event.startDateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' })}</h3>
    </div>
</div>