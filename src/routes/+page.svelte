<script>
	import home_background from '$lib/assets/home_background.jpg';
</script>

<title>HOME</title>
<main class="flex flex-1 justify-center items-center">
	<img src={home_background} alt="people camping on snow" fetchpriority="high"
			 class="absolute inset-0 -z-10 h-full w-full object-cover" />
	<div style="padding: 2em;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
				position: relative;
				top: 5vh;">
		<div style="font-size: 2em;
        font-weight: 900;
        color: white;
        letter-spacing: .08em;
        margin-bottom: 1.5em;">
			LEAD THE ADVENTURE
		</div>
		<a style="text-align: center;
        align-content: center;
        color: white;
        text-decoration: none;
        border: 1px solid white;
        min-width: 11em;
        min-height: 4em;
        margin-top: 1.5em;" href="/about">
			ABOUT
		</a>
	</div>
</main>