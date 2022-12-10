<script lang="ts">
	import {writable} from "svelte/store";

  export let navBar;
	export let navBarIndex;

	const crewItems = [
      {
          index: 0,
					name: 'Douglas Hurley',
					role: 'Commander',
					description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
					image: '../../assets/crew/image-douglas-hurley.png'
			},
      {
          index: 1,
					name: 'MARK SHUTTLEWORTH',
					role: 'Mission Specialist',
					description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
					image: '../../assets/crew/image-mark-shuttleworth.png'
			},
      {
          index: 2,
					name: 'Victor Glover',
					role: 'Pilot',
					description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
					image: '../../assets/crew/image-victor-glover.png'
			},
      {
          index: 3,
					name: 'Anousheh Ansari',
					role: 'Flight Engineer',
					description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
					image: '../../assets/crew/image-anousheh-ansari.png'
			}
	]

	let currentCrew = writable(crewItems[0]);
</script>

<main class="mx-36 my-20 flex-row flex">
	<div class="gap-y-32 grid h-80 w-4/6">
		<h1 class="font-barlow text-h5">
			<span class="text-white opacity-25 font-bold">0{$navBarIndex}</span>
			<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
		</h1>
		<div>
			<p class="text-white opacity-25 font-bellefair text-h4 uppercase">{$currentCrew.role}</p>
			<h2 class="font-bellefair text-h3 text-white uppercase">{$currentCrew.name}</h2>
			<p class="text-tahiti font-barlow w-4/6">{$currentCrew.description}</p>
		</div>
		<div>
			{#each crewItems as crew}
				<button
						class="w-5 h-5 rounded-full bg-white text-transparent mr-10"
						on:click={() => currentCrew.set(crew)}
				>
					helo
				</button>
			{/each}
		</div>
	</div>
	<div class="absolute bottom-0 right-20">
		<img src="{$currentCrew.image}" alt="{$currentCrew.name}" />
	</div>
</main>