<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	const pages = [{ label: 'HOME', path: '' },
		{ label: 'VENTURING', path: 'venturing' },
		{ label: 'ABOUT', path: 'about' },
		{ label: 'PAST EVENTS', path: 'past-events' },
		{ label: 'FUTURE ADVENTURES', path: 'future-adventures' },
		{ label: 'DONATE/VOLUNTEER', path: 'donate-volunteer' },
		{ label: 'CONTACT', path: 'contact' }];

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
	<button class="menu-button">
		☰
	</button>
	<nav id="nav-menu">
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
        position: relative;
        justify-self: center;
        text-align: right;
    }

    .menu-button {
        position: absolute;
        top: 0;
        left: 1;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        width: fit-content;
        position: absolute;
        visibility: hidden;
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
            flex-grow: 1;
        }

        nav {
            flex-direction: row;
            width: auto;
            position: static;
            visibility: visible;
        }

        .menu-button {
            visibility: hidden;
        }
    }
</style>
