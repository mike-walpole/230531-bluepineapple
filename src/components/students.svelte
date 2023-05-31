<script>
	import Student from '$lib/studentdata.json';
</script>

<!-- 
<div class="px-10 grid grid-cols-3">
			
			{#each Student as { name, mugshot,link }}
                    <a href={link}>
                        <div class="flex flex-rows w-full border border-black">
                            <img class="h-24" src={mugshot} alt={name}>
                            <div class="flex flex-col justify-around ml-5">
                                <p class="font-bold">{name}</p>
                                <p>PhD student</p>
                            </div>
                        </div>
					</a>
			
			{/each}
</div>

We can access the people default import which is an array directly in the code -->

<div id="section-2" class="snap-start grid grid-cols-1 md:grid-cols-3 md:h-screen">
	<div
		id="container for logos"
		class="px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 md:h-2/3 col-start-1 col-end-3 md:my-auto order-last md:order-first grayscale"
	>
		{#each Student as { name, mugshot, link, position }}
			<a class="my-5" href={link}>
				<div class="flex flex-rows w-full ">
					<img class="h-24" loading="lazy" src={mugshot} alt={name} />
					<div class="flex flex-col justify-around mx-2 md:mx-5">
						<p class="font-bold">{name}</p>
						<p>{position}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div id="container for words" class="pt-10 col-span-1 px-5 pr-10 mb-5 md:mb-0">
		<p class="text-lg uppercase tracking-widest">People</p>
		<h1 class="text-3xl font-bold mb-5">The A Team</h1>
		<p class="mb-2">
			It is said that you always go with an A team when you are building an organisation. This has
			been a theme for us at Bluepineapple. Our outstanding leadership team of founders, leaders and
			innovators have laid the foundation of a great team. We are really proud to have a fabulous
			leadership team that embodies a strong set of principles. Their most impressive trait is the
			practicing of “servant-leadership” model that we keep hearing about as a must have for a
			successful organisation.We congratulate and welcome this team for coming together with their
			shared values to achieve our vision – Enable every enterprise user worldwide have the right
			cloud experience!
		</p>
	</div>
</div>
