<script>
	import default_background from '$lib/assets/default_background.jpg';
	import donate_one from '$lib/assets/donate_one.jpg';
	import donate_two from '$lib/assets/donate_two.jpg';
	import donate_three from '$lib/assets/donate_three.jpg';
</script>

<title>DONATE/VOLUNTEER</title>
<div class="page" style="background-image:url({default_background});">
	<div class="content">
		<h1 class="dark">Donate to Olympic Adventure Experience</h1>
		<div style="display: flex; direction: row; column-gap:4rem;">
			<a class="dark" href="https://square.link/u/iPuHNjrT">
				<div class="section">
					<img src="{donate_one}" style="width: 20rem;" />
					<p class="dark" style="margin:0; padding:0;">Donate with Square!</p>
				</div>
			</a>
			<div>
				<p class="dark">OAE needs financial support to do the work that we do. We need to purchase
					gear. We need to pay for access permits, for food and transportation on our events, or
					sometimes for guide services. There's also Scouting America membership fees, liability
					insurance, and more.</p>
				<p class="dark">We aim to lower the financial barrier of entry into mountaineering and other
					high adventure activities. We will never turn away an otherwise prepared youth because they
					can't pay for a trip, but we need your help to do that.</p>
				<p class="dark">Every dollar helps, and every penny we receive will go directly into our
					program.</p>
			</div>
		</div>
		<h1 class="dark">Volunteering with Olympic Adventure Experience:</h1>
		<div style="display:flex; direction:row; column-gap: 1rem;">
			<div style="align-content: center;">
				<img src="{donate_two}" style="max-width: 30rem; height:auto;" />
			</div>
			<div>
				<p class="dark">At OAE, we follow the Venturing model of a youth run organization. That means that the
				youth members (aged 14-20) decide what events they want to do and when. It also means the
				youth do the planning of the events and lead the meetings and events while they are
				happening.</p>
				<p class="dark">Despite being youth-run, OAE still very much needs adult volunteers. The adult role in
					Venturing, and in OAE, is to provide guidance to the youth and ensure the events are well
					planned and safely conducted.  Our youth have ambitious plans, and we need adults who are
					experts in a variety of outdoor activities to support them.</p>
			</div>
		</div>
		<div style="display:flex; direction:row; column-gap: 4rem;">
			<div>
				<p class="dark">Each event we do requires at least two adults, and at least one of the same gender as every youth on the trip.  That means that on most of the trips, we need at least one male and at least one female adult.  That's often hard to come by: we all busy lives and can't make all the trips.</p>
				<p class="dark">You don't have to be an expert mountaineer or even an experienced camper to play an important role.  Everything helps:  very often simply volunteering to drive save trips.  We all continue to develop and hone our outdoor skills as we go on adventures with OAE; we're perfectly happy for you to learn the rest of us.</p>
				<p class="dark">No matter what your experience level, as long as you want to help us empower the youth of today and the leaders of tomorrow, you have a home here at Olympic Adventure Experience.  We want and need your help.  So come out and see us, or shoot us an email, and let's see what good we can accomplish together.</p>
			</div>
			<div style="align-content: center;">
				<img src="{donate_three}" style="max-width: 20rem; height:auto;" />
			</div>
		</div>
	</div>
</div>

<style>
		.content {
				width: 60rem;
		}

    .page {
        flex: 1;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        align-content: center;
        font-size: 1.5rem;
        /*margin: 1rem;*/
    }

    div.section {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>