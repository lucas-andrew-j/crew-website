<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	const pages = [{ label: 'HOME', path: '' },
		{ label: 'VENTURING', path: 'venturing' },
		{ label: 'ABOUT', path: 'about' },
		{ label: 'PAST EVENTS', path: 'past-events' },
		{ label: 'FUTURE ADVENTURES', path: 'future-adventures' },
		{ label: 'DONATE/VOLUNTEER', path: 'donate-volunteer' },
		{ label: 'CONTACT', path: 'contact' },
		{ label: 'MORE', path: 'more' }];

	let currentPage = $derived(page.url.pathname.split('/')[1]);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="logo">OLYMPIC<br />
		ADVENTURE<br />
		EXPERIENCE
	</div>
	<nav>
		{#each pages as page}
			<a href="/{page.path}" aria-current="{currentPage === page.path}" class="nav-item">{page.label}</a>
		{/each}
	</nav>
	<div class="logo" style="visibility:hidden;">OLYMPIC<br />
		ADVENTURE<br />
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
        flex-grow: 0;
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

    .nav-item[aria-current=true] {
        border-bottom: 5px solid rgb(71, 79, 118);
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
