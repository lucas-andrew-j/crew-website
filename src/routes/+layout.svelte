<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="header-section">
	<div class="logo">OLYMPIC<br/>
		ADVENTURE<br/>
		EXPERIENCE
	</div>
	<div class="nav">
		<div class="nav-item">HOME</div>
		<div class="nav-item">VENTURING</div>
		<div class="nav-item">ABOUT</div>
		<div class="nav-item">PAST EVENTS</div>
		<div class="nav-item">FUTURE ADVENTURES</div>
		<div class="nav-item">DONATE/VOLUNTEER</div>
		<div class="nav-item">CONTACT</div>
		<div class="nav-item">MORE</div>
	</div>
	<div class="logo" style="visibility:hidden;">OLYMPIC<br/>
		ADVENTURE<br/>
		EXPERIENCE
	</div>
</div>

<style>
    .header-section {
        display: flex;
        align-items: center;
				gap: 4em;
        padding: 2em;
    }

		.logo {
        font-weight: bold;
				text-align: right;
				flex-grow: 1;
		}

    .nav {
        display: flex;
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
				flex-grow:0
    }

    .nav-item {
        min-height: 4em;
        min-width: 137px;
        max-width: 137px;
        text-align: center;
        align-content: center;
        border-right: solid 1px;
        border-right-color: rgb(71, 79, 118);
        border-left: solid 1px;
        border-left-color: rgb(71, 79, 118);
        color: rgb(71, 79, 118);
    }

    .nav-item:hover {
        color: white;
        background-color: rgb(71, 79, 118);
    }

    .nav-item + .nav-item {
        border-left: none;
    }
</style>

{@render children()}
