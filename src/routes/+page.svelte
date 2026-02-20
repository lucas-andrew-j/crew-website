<script>
	import home_background from '$lib/assets/home_background.jpg';
</script>

<title>HOME</title>
<div class="page" style="background-image:url({home_background});">
	<div class="container">
		<div id="message">
			LEAD THE ADVENTURE
		</div>
		<a id="about-button" href="/about">
			ABOUT
		</a>
	</div>
</div>

<style>
    .page {
        flex: 1;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        padding: 2em;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
				position: relative;
				top: 5vh;
    }

    #message {
        font-size: 2em;
        font-weight: 900;
        color: white;
        letter-spacing: .08em;
        margin-bottom: 1.5em;
    }

    #about-button {
        text-align: center;
        align-content: center;
        color: white;
        text-decoration: none;
        border: 1px solid white;
        min-width: 11em;
        min-height: 4em;
        margin-top: 1.5em;
    }

    #about-button:hover {
        color: black;
        background-color: white;
    }
</style>