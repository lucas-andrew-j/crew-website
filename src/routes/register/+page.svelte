<script lang="ts">
	import default_background from '$lib/assets/default_background.jpg';
	import { enhance, applyAction } from '$app/forms';
	import type { ActionData } from './$types';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { form }: { form: ActionData } = $props();

	let formEl: HTMLFormElement | undefined = $state();
	let valid = $state(false);
	let submitting = $state(false);
	let turnstileDone = $state(false);

	onMount(() => {
		let widgetId: string | undefined;
		let intervalCount = 1;

		const check = setInterval(() => {
			if (window.turnstile || intervalCount > 50) {
				clearInterval(check);
			}

			if (window.turnstile) {
				widgetId = window.turnstile.render('.cf-turnstile', {
					sitekey: '0x4AAAAAAEp6CP5eujalxeMC',
					callback: () => (turnstileDone = true),
					'expired-callback': () => (turnstileDone = false),
				});
			}

			intervalCount++;
		}, 100);

		return () => {
			clearInterval(check);
			if (widgetId) window.turnstile?.remove(widgetId);
		};
	});
</script>

<svelte:head>
	<title>REGISTER</title>
</svelte:head>

<main class="flex flex-col flex-1">
	<img src={default_background} alt="looking south from mt adams" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover"/>
	<div class="prose mx-auto px-4 sm:px-6 mt-8">
		<h1 class="text-default-blue">Register</h1>
		{#if form?.success}
			<p class="text-default-blue">We've sent a verification link to {form.email}. Click it to finish creating your account.</p>
		{:else}
			<form method="POST"
				bind:this={formEl}
				oninput = {() => (valid = formEl!.checkValidity())}
						use:enhance={() => {
						submitting = true;
						return async ({ result }) => {
							await applyAction(result);
							await invalidate('app:auth');
							submitting = false;
						};
					}}
				class="flex flex-col [&_label]:flex [&_label]:flex-col [&_label]:pt-4"
			>
				<label>
					First Name
					<input
						name="firstName"
						required
					/>
				</label>
				<label>
					Last Name
					<input
						name="lastName"
						required
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						required
					/>
				</label>
				<label>
					Password
					<input
						type="password"
						name="password"
						required
					/>
				</label>
				<div class="cf-turnstile pt-6"
						 data-sitekey="0x4AAAAAAEp6CP5eujalxeMC"
						 data-theme="light"
						 data-size="normal"></div>
				{#if form?.message}
					<p class="text-red-600">{form.message}</p>
				{/if}
				<button type="submit"
								disabled={!valid || !turnstileDone}
					class="bg-default-blue text-white mt-4 h-12 w-36 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Register
				</button>
				<a href="login">Need to login?</a>
			</form>
		{/if}
	</div>
</main>
