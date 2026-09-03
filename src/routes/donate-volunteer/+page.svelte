<script>
    import default_background from '$lib/assets/default_background.jpg';
    import donate_one from '$lib/assets/donate_one.jpg';
    import donate_two from '$lib/assets/donate_two.jpg';
    import donate_three from '$lib/assets/donate_three.jpg';
</script>

<svelte:head>
    <title>DONATE/VOLUNTEER</title>
</svelte:head>

<main class="flex-col flex-1 justify-center">
    <img src={default_background} alt="looking south from mt adams" fetchpriority="high"
         class="fixed inset-0 -z-10 h-full w-full object-cover"/>
    <article class="prose mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 [&_p]:text-default-blue flow-root">
        <h1 class="text-default-blue">Donate to Olympic Adventure Experience</h1>
        <a href="https://square.link/u/iPuHNjrT" target="_blank"
           class="float-none w-full sm:float-left sm:w-1/2 mt-0 sm:mr-6 mb-4 flex flex-col items-center justify-center no-underline">
            <img src={donate_one} alt="the crew atop a summit" class="mb-0">
            <div class="font-black text-2xl">Donate with Square!</div>
        </a>
        <p>OAE needs financial support to do the work that we do. We need to purchase gear. We need to pay for access
            permits, for food and transportation on our events, or sometimes for guide services. There's also Scouting
            America membership fees, liability insurance, and more.</p>
        <p>We aim to lower the financial barrier of entry into mountaineering and other high adventure activities. We
            will never turn away an otherwise prepared youth because they can't pay for a trip, but we need your help to
            do that.</p>
        <p>Every dollar helps, and every penny we receive will go directly into our program.</p>
    </article>
    <article class="prose mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 mb-8 [&_p]:text-default-blue">
        <h1 class="text-default-blue">Volunteer with Olympic Adventure Experience</h1>
        <img src={donate_two} alt="looking south from mt adams"
             class="float-none w-full sm:float-left sm:w-1/2 mt-0 sm:mr-6 mb-4">
        <p>At OAE, we follow the Venturing model of a youth run organization. That means that the youth members (aged
            14-20) decide what events they want to do and when. It also means the youth do the planning of the events
            and lead the meetings and events while they are happening.</p>
        <p>Despite being youth-run, OAE still very much needs adult volunteers. The adult role in Venturing, and in OAE,
            is to provide guidance to the youth and ensure the events are well planned and safely conducted. Our youth
            have ambitious plans, and we need adults who are experts in a variety of outdoor activities to support
            them.</p>
        <img src={donate_three} alt="a volunteer on the muir snowfield"
             class="float-none w-full sm:float-right sm:w-1/3 mt-0 sm:ml-6 mb-4">
        <p>Each event we do requires at least two adults, and at least one of the same gender as every youth on the
            trip. That means that on most of the trips, we need at least one male and at least one female adult. That's
            often hard to come by: we all busy lives and can't make all the trips.</p>
        <p>You don't have to be an expert mountaineer or even an experienced camper to play an important role.
            Everything helps: very often simply volunteering to drive save trips. We all continue to develop and hone
            our outdoor skills as we go on adventures with OAE; we're perfectly happy for you to learn the rest of
            us.</p>
        <p>No matter what your experience level, as long as you want to help us empower the youth of today and the
            leaders of tomorrow, you have a home here at Olympic Adventure Experience. We want and need your help. So
            come out and see us, or shoot us an email, and let's see what good we can accomplish together.</p>
    </article>
</main>