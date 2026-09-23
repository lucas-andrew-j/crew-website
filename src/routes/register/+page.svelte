<script lang="ts">
	import default_background from '$lib/assets/default_background.jpg';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
	<title>REGISTER</title>
</svelte:head>

<main class="flex flex-col flex-1">
	<img src={default_background} alt="looking south from mt adams" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover"/>
	<div class="prose mx-auto px-4 sm:px-6 mt-8">
		<h1 class="text-default-blue">Register</h1>
		<form method="POST" use:enhance class="flex flex-col [&_label]:flex [&_label]:flex-col [&_label]:pt-4">
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
					 data-size="normal"
					 data-callback="onSuccess"></div>
			{#if form?.message}
				<p class="text-red-600">{form.message}</p>
			{/if}
			<button type="submit" class="bg-default-blue text-white mt-4 h-12 w-36">Register</button>
			<a href="login">Need to login?</a>
		</form>
	</div>
</main>
