<script lang="ts">
	import {writable} from "svelte/store";

  export let navBar
	export let navBarIndex

	const planetItems = [
      {
          name: 'Moon',
					index: 0,
					image: '../../assets/destination/image-moon.png',
					description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
					distance: '384.400 km',
					travelTime: '3 days',
			},
      {
          name: 'Mars',
					index: 1,
					image: '../../assets/destination/image-mars.png',
					description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
					distance: '225 mil. km',
					travelTime: '9 months',
			},
      {
          name: 'Europa',
					index: 2,
					image: '../../assets/destination/image-europa.png',
					description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
					distance: '628 mil. km',
					travelTime: '3 years',
			},
      {
          name: 'Titan',
					index: 3,
					image: '../../assets/destination/image-titan.png',
					description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
					distance: '1.6 bil. km',
					travelTime: '7 years',
			}
	]

	let currentPlanet = writable(planetItems[0])

	let buttonStyleIdle: string ="text-white pb-2 font-barlow text-navText uppercase  "

</script>

<main class="md:mx-10 lg:mx-36 lg:mt-20">
	<h1 class="font-barlow text-h5 text-center mt-20 md:text-left md:">
		<span class="text-white opacity-25 font-bold">0{$navBarIndex}</span>
		<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
	</h1>
	<div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:mt-20 lg:ml-16">
		<div class="flex justify-center my-10">
			<img src={$currentPlanet.image} alt="image planete" class="w-2/4 md:w-1/3 lg:w-4/5 "/>
		</div>
		<div>
			<div class="flex flex-row gap-10 justify-center lg:justify-start">
				{#each planetItems as planet}
					<div class="">
						<button
							on:click={()=> currentPlanet.set(planet)}
							class={planet.index === $currentPlanet.index ? buttonStyleIdle + "border-b-2" : buttonStyleIdle + 'hover:border-b-2 hover:border-white/50'}
						>
							{planet.name}
						</button>
					</div>
				{/each}
			</div>
			<h1 class="text-h3 text-white font-bellefair uppercase text-center lg:text-h2 lg:text-left">{$currentPlanet.name}</h1>
			<div class="border-b border-gray pb-10 mx-10 md:mx-32 lg:mx-0">
				<p class="text-tahiti text-bodyPhone font-barlowRegular text-center lg:text-body lg:text-left">{$currentPlanet.description}</p>
			</div>
			<div class="flex flex-col lg:flex-row pt-10">
				<div class="lg:mr-10">
					<p class="text-tahiti font-barlow text-subheading2 uppercase text-center lg:text-left">avg. distance</p>
					<p class="text-white font-bellefair text-subheading1 uppercase text-center lg:text-left">{$currentPlanet.distance}</p>
				</div>
				<div class="my-10 lg:ml-10 lg:my-0">
					<p class="text-tahiti font-barlow text-subheading2 uppercase text-center lg:text-left">est. travel time</p>
					<p class="text-white font-bellefair text-subheading1 uppercase text-center lg:text-left">{$currentPlanet.travelTime}</p>
				</div>
			</div>
		</div>
	</div>
</main>