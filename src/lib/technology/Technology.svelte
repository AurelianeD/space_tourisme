<script lang="ts">
	import {writable} from "svelte/store";

  export let navBar;
	export let navBarIndex: number;

	const technoItems= [
      {
          index: 0,
					name: 'launch vehicule',
					description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
					image: '../../assets/technology/image-launch-vehicle-portrait.jpg',
			},
      {
          index: 1,
					name: 'spaceport',
					description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
					image: '../../assets/technology/image-spaceport-portrait.jpg',

			},
      {
          index: 2,
					name: 'space capsule',
					description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
					image: '../../assets/technology/image-space-capsule-portrait.jpg',
			}
	]

	let currentTechnoItem = writable(technoItems[0]);
</script>

<main class=" mt-20 flex flex-row">
	<div class="ml-36 mr-28">
		<h1 class="font-barlow text-h5">
			<span class="text-white opacity-25 font-bold">0{$navBarIndex}</span>
			<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
		</h1>
		<div class="flex flex-row mt-28">
			<div class="flex flex-col mr-16 gap-10">
				{#each technoItems as techno}
					<button
						on:click={() => currentTechnoItem.set(techno)}
						class="bg-black py-3 px-7 text-white font-bellefair text-h4 rounded-full border-white border-2"
					>
						{techno.index + 1}
					</button>
				{/each}
			</div>
			<div>
				<p class="text-tahiti font-barlow text-navText">THE TERMINOLOGY…</p>
				<h2 class="text-white font-bellefair text-h3 uppercase">{$currentTechnoItem.name}</h2>
				<p class="text-tahiti font-barlowRegular text-body mr-10">{$currentTechnoItem.description}</p>
			</div>
		</div>
	</div>
	<img src={$currentTechnoItem.image} alt="image technology" class="mt-10"/>
</main>