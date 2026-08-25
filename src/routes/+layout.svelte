<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	const pages = [{ label: 'HOME', path: '' },
		{ label: 'VENTURING', path: 'venturing' },
		{ label: 'ABOUT', path: 'about' },
		{ label: 'PAST EVENTS', path: 'past-events' },
		{ label: 'FUTURE ADVENTURES', path: 'future-adventures' },
		{ label: 'DONATE/VOLUNTEER', path: 'donate-volunteer' },
		{ label: 'CONTACT', path: 'contact' },
		{ label: 'REGISTRATION', path: 'registration' },];

	let currentPage = $derived(page.url.pathname.split('/')[1]);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<nav class="relative flex items-center py-4 px-6 border-b border-gray-200 bg-white">
		<div class="flex items-center gap-2 shrink-0">OLYMPIC<br />
			ADVENTURE<br />
			EXPERIENCE
		</div>
		<div class="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center">
			{#each pages as page (page.label)}
				<a href="/{page.path}" aria-current="{currentPage === page.path}" class="w-34 h-16 flex items-center text-center justify-center text-base text-blue-900 hover:text-white hover:bg-blue-900 transition-colors">{page.label}</a>
			{/each}
		</div>
	</nav>
</header>

{@render children()}
