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
	let navigationStyle: string = 'w-5 h-5 rounded-full mr-10 text-transparent '
</script>

<main class="mx-7 lg:mx-36 lg:my-20 lg:flex-row ">
	<div class="flex flex-col lg:justify-between lg:h-[35rem] lg:w-4/6">
		<h1 class="font-barlow text-h5 text-center order-1 my-10 md:text-left md:text-h5-tablet lg:my-0">
			<span class="text-white opacity-25 font-bold">0{$navBarIndex}</span>
			<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
		</h1>
		<div class="flex order-2 justify-center border-b border-gray md:border-none md:order-4 md:absolute md:bottom-0 md:right-2/4 lg:absolute lg:bottom-0 lg:right-20">
			<img src="{$currentCrew.image}" alt="{$currentCrew.name}" class="w-2/4 md:w-2/4 lg:w-full"/>
		</div>
		<div class="order-4 md:order-2 md:px-32">
			<p class="text-white opacity-25 font-bellefair text-navText uppercase text-center md:text-h3Phone lg:text-h4 lg:text-left">{$currentCrew.role}</p>
			<h2 class="font-bellefair text-h3Phone text-center text-white uppercase md:text-h3-tablet lg:text-left lg:text-h3">{$currentCrew.name}</h2>
			<p class="text-tahiti font-barlowRegular font-bodyPhone text-center mt-5 md:text-body-tablet lg:text-left">{$currentCrew.description}</p>
		</div>
		<div class="flex order-3 justify-center my-10">
			{#each crewItems as crew}
				<button
						class={crew.index === $currentCrew.index ? navigationStyle + 'bg-white' : navigationStyle + 'bg-white/25 hover:bg-white/50'}
						on:click={() => currentCrew.set(crew)}
				>
				</button>
			{/each}
		</div>
	</div>

</main>