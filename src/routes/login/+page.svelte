<script>
	import default_background from '$lib/assets/default_background.jpg';
</script>

<svelte:head>
	<title>LOGIN</title>
</svelte:head>

<main class="flex flex-col flex-1">
	<img src={default_background} alt="looking south from mt adams" fetchpriority="high"
			 class="fixed inset-0 -z-10 h-full w-full object-cover"/>
	<div class="prose mx-auto px-4 sm:px-6 mt-8 [&_p]:text-default-blue [&_h3]:text-default-blue">
		<h1 class="text-default-blue">Login</h1>
		<form method="POST" class="flex flex-col [&_label]:flex [&_label]:flex-col [&_label]:pt-4">
			<label>
				Email
				<input
					name="email"
					required
				/>
			</label>
			<label>
				Password
				<input
					name="password"
				/>
			</label>
			<div class="cf-turnstile pt-6"
					 data-sitekey="0x4AAAAAAEp6CP5eujalxeMC"
					 data-theme="light"
					 data-size="normal"
					 data-callback="onSuccess"></div>
			<button type="submit" class="bg-default-blue text-white mt-4 h-12 w-36">Login</button>
			<a href="register">Need to register?</a>
		</form>
	</div>
</main>