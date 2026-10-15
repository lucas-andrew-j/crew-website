<script lang="ts">
    let { event } = $props();
</script>

<div class="p-2">
    {#if event.thumbnailUrl}
        <img src="{event.thumbnailUrl}" alt="thumbnail image for {event.name}"
            class="object-cover w-72 h-48"/>
    {/if}
    <h3>{event.name} - {event.startDateTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</h3>
</div>