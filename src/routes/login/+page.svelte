<script lang="ts">
	import default_background from '$lib/assets/default_background.jpg';
	import type { ActionData } from '../../../.svelte-kit/types/src/routes/register/$types.d.ts';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>LOGIN</title>
</svelte:head>

<main class="flex flex-col flex-1">
	<img src={default_background} alt="looking south from mt adams" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover"/>
	<div class="prose mx-auto px-4 sm:px-6 mt-8">
		<h1 class="text-default-blue">Login</h1>
		<form method="POST" use:enhance class="flex flex-col [&_label]:flex [&_label]:flex-col [&_label]:pt-4">
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
				/>
			</label>
			<div class="cf-turnstile pt-6"
					 data-sitekey="0x4AAAAAAEp6CP5eujalxeMC"
					 data-theme="light"
					 data-size="normal"
					 data-callback="onSuccess"></div>
			{#if form?.message}
				<p class="text-red-600">{form.message}</p>
			{/if}
			<button type="submit" class="bg-default-blue text-white mt-4 h-12 w-36">Login</button>
			<a href="register">Need to register?</a>
		</form>
	</div>
</main>