<script>
    let { event } = $props();
</script>

<div class="p-2">
    <h2>{event.name}</h2>
    <p class="indent-2">{event.startDateTime.toLocaleDateString()}</p>
</div>