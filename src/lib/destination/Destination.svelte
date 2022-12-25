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

	let buttonStyleIdle: string ="text-white pb-2 font-barlow text-navText uppercase hover:border-b-2 hover:border-white/50 "

</script>

<main class="mx-36 mt-20 ">
	<h1 class="font-barlow text-h5">
		<span class="text-white opacity-25 font-bold">0{$navBarIndex}</span>
		<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
	</h1>
	<div class="grid grid-cols-2 gap-16	 mt-20 ml-16">
		<div class="self-center w-4/5">
			<img src={$currentPlanet.image} alt="image planete" class="w-full"/>
		</div>
		<div class="">
			<div class="flex flex-row gap-10">
				{#each planetItems as planet}
					<div class="">
						<button
							on:click={()=> currentPlanet.set(planet)}
							class={planet.index === $currentPlanet.index ? buttonStyleIdle + "border-b-2" : buttonStyleIdle}
						>
							{planet.name}
						</button>
					</div>
				{/each}
			</div>
			<h1 class="text-h2 text-white font-bellefair uppercase">{$currentPlanet.name}</h1>
			<p class="text-tahiti text-body font-barlowRegular">{$currentPlanet.description}</p>
			<span class="h-1 bg-white text-transparent w-full">hello</span>
			<div class="flex flex-row">
				<div class="mr-10">
					<p class="text-tahiti font-barlow text-subheading2 uppercase">avg. distance</p>
					<p class="text-white font-bellefair text-subheading1 uppercase">{$currentPlanet.distance}</p>
				</div>
				<div class="ml-10">
					<p class="text-tahiti font-barlow text-subheading2 uppercase">est. travel time</p>
					<p class="text-white font-bellefair text-subheading1 uppercase">{$currentPlanet.travelTime}</p>
				</div>
			</div>
		</div>
	</div>
</main>