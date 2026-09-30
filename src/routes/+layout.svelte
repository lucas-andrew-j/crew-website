<script lang="ts">
	import './layout.css';
	import oae_logo from '$lib/assets/oae_logo.svg';
	import { page } from '$app/state';
	import { authClient } from '$lib/client/auth';
	import { invalidate, goto } from '$app/navigation';

	const pages = [{ label: 'HOME', path: '' },
		{ label: 'VENTURING', path: 'venturing' },
		{ label: 'ABOUT', path: 'about' },
		{ label: 'PAST EVENTS', path: 'past-events' },
		{ label: 'FUTURE ADVENTURES', path: 'future-adventures' },
		{ label: 'DONATE / VOLUNTEER', path: 'donate-volunteer' },
		{ label: 'CONTACT', path: 'contact' },
	];

	let currentPage = $derived(page.url.pathname.split('/')[1]);

	let navContainer: HTMLElement = $state()!;
	let logo: HTMLElement = $state()!;
	let desktopNav: HTMLElement = $state()!;
	let isOverflowing = $state(false);
	let mobileMenuOpen = $state(false);
	let logoutError: string | null = $state(null);

	$effect(() => {
		if (!navContainer || !desktopNav) return;

		const checkOverflow = () => {
			isOverflowing = desktopNav.scrollWidth + logo.scrollWidth * 2 > navContainer.clientWidth;
		};

		const observer = new ResizeObserver(checkOverflow);
		observer.observe(navContainer);

		checkOverflow();

		return () => observer.disconnect();
	});

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={oae_logo} />
</svelte:head>

<header>
	<nav bind:this={navContainer}
			 class={{'relative flex items-center py-4 bg-white': true,
			 				 'text-center justify-center': isOverflowing === true}}>
		<div bind:this={logo} class={{'px-6 min-h-20': true, 'text-center': isOverflowing === true}}>
			<img src={oae_logo} class="w-20 h-20" alt="olympic adventure experience logo" />
		</div>

		<div bind:this={desktopNav}
				 class={{'absolute left-1/2 -translate-x-1/2 flex items-center': true,
								 'invisible absolute': isOverflowing === true}}
				 aria-hidden={isOverflowing}>
			{#each pages as p (p.label)}
				<a href="/{p.path}" aria-current="{currentPage === p.path ? 'page' : undefined}"
					 class={{'w-34 h-16 flex items-center text-center justify-center text-base text-default-blue hover:text-white hover:bg-default-blue transition-colors border-default-blue': true,
									 'border-b-2': currentPage === p.path,}}>
					{p.label}
				</a>
			{/each}
		</div>

		<div class="absolute right-0 px-6">
			{#if data.loggedIn}
				<button class="bg-default-blue text-white p-2 text-center"
					onclick={async () => {
						logoutError = null;
						try {
							const { error } = await authClient.signOut();
							if (error) {
								logoutError = 'Failed to logout';
								return;
							}
							await invalidate('app:auth');
							goto('/');
						} catch (e) {
							console.error('Logout error:', e);
							logoutError = 'Failed to logout';
						}
				}}>Logout</button>
				{#if logoutError}
					<p class="text-red-600 text-sm">{logoutError}</p>
				{/if}
			{:else}
				<div class="flex flex-col gap-1">
					<a class="bg-default-blue text-white p-2 text-center" href="/login">Login</a>
					<a class="bg-default-blue text-white p-2 text-center" href="/register">Register</a>
				</div>
			{/if}
		</div>

		{#if isOverflowing}
			<button
				class="absolute left-0 flex items-center justify-center w-16 h-16"
				aria-expanded={mobileMenuOpen}
				aria-label="Toggle navigation menu"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				<svg class="w-6 h-6 text-default-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>

			{#if mobileMenuOpen}
				<div class="absolute top-full left-0 w-full flex flex-col bg-white shadow-lg z-10">
					{#each pages as p (p.label)}
						<a href="/{p.path}"
							 aria-current={currentPage === p.path ? 'page' : undefined}
							 onclick={() => (mobileMenuOpen = false)}
							 class={{'w-full h-16 flex items-center justify-center text-base transition-colors': true,
											 'text-default-blue hover:text-white hover:bg-default-blue': currentPage !== p.path,
											 'text-white bg-default-blue': currentPage === p.path,
							 }}
						>
							{p.label}
						</a>
					{/each}
				</div>
			{/if}
		{/if}
	</nav>
</header>

{@render children()}
