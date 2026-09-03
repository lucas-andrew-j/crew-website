<script>
    import default_background from '$lib/assets/default_background.jpg';
    import donate_one from '$lib/assets/donate_one.jpg';
    import donate_two from '$lib/assets/donate_two.jpg';
    import donate_three from '$lib/assets/donate_three.jpg';
</script>

<svelte:head>
    <title>CONTACT</title>
</svelte:head>

<main class="flex-col flex-1 justify-center">
    <img src={default_background} alt="looking south from mt adams" fetchpriority="high"
         class="fixed inset-0 -z-10 h-full w-full object-cover"/>
    <div class="prose mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-8 [&_p]:text-default-blue ">
        <h1 class="text-default-blue">Contact Us</h1>
        <div
            class="relative h-60 overflow-hidden max-w-full rounded-lg">
            <iframe src="https://maps.google.com/maps?q=11701%20Ridgepoint%20Dr%20NW%2C%20Silverdale%2C%20WA%2098383&t=m&z=15&ie=UTF8&iwloc=B&output=embed"
                    class="absolute inset-0 h-full w-full object-cover">
                    allowfullscreen
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="flex flex-row">
            <div class="prose w-full sm:float-left sm:w-1/3">
                <h3>Joining Us</h3>
                <p>The first step in joining OAE is to come to one of our regular meetings.</p>
                <p>OAE meets on each Thursday at 7pm. Usually, the meeting are at Silverdale Lutheran Church in the
                    Gathering
                    Place, which is the building at the south end of the parking lot. Sometimes we'll meet somewhere
                    else for a
                    planned activity.</p>
                <p>Membership in Olympic Adventure Experience is completely free.</p>

                <h3>Ready to sign up?</h3>
                <p>To join Olympic Adventure Experience, you need to register with Venturing Crew 1548.</p>
                <p>You can do that here: <a
                        href="https://my.scouting.org/online-registration/fdbd896b-49d8-4d74-98c0-bde079ead0e2/applicant-type">Application</a>
                </p>

                <h3>CONTACT INFORMATION</h3>
                <p>Address:<br/>11701 Ridgepoint Dr NW, Silverdale, WA 98383</p>
                <p>President@OlympicAdventure.org</p>
            </div>
            <div>
                Contact form
            </div>
        </div>
    </div>
</main>