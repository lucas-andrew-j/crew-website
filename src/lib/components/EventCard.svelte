<script>
    let { event } = $props();
</script>

<div class="p-2">
    <h3>{event.name}</h3>
    <p class="indent-2">{event.startDateTime.toLocaleDateString()}</p>
    {#if event.thumbnailUrl}
        <img src="{event.thumbnailUrl}" alt="thumbnail image for {event.name}"/>
    {/if}
</div>