<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="logo">OLYMPIC<br/>
		ADVENTURE<br/>
		EXPERIENCE
	</div>
	<nav>
		<a href="/" class="nav-item">HOME</a>
		<a href="/venturing" class="nav-item">VENTURING</a>
		<a href="/about" class="nav-item">ABOUT</a>
		<a href="/past-events" class="nav-item">PAST EVENTS</a>
		<a href="/future-adventures" class="nav-item">FUTURE ADVENTURES</a>
		<a href="/donate-volunteer" class="nav-item">DONATE/VOLUNTEER</a>
		<a href="/contact" class="nav-item">CONTACT</a>
		<a href="/more" class="nav-item">MORE</a>
	</nav>
	<div class="logo" style="visibility:hidden;">OLYMPIC<br/>
		ADVENTURE<br/>
		EXPERIENCE
	</div>
</header>

{@render children()}

<style>
    header {
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

    nav {
        display: flex;
        max-width: fit-content;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
				flex-grow:0;
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
        text-decoration: none;
    }

    .nav-item:hover {
        color: white;
        background-color: rgb(71, 79, 118);
    }

    .nav-item + .nav-item {
        border-left: none;
    }

		@media (min-width: 82em) and (min-width: 768px) {
			.logo {
					background-color: transparent;
			}
		}
</style>
