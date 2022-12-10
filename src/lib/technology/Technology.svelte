<script lang="ts">
	import {writable} from "svelte/store";

  export let navBar;
	export let navBarIndex;

	const technoItems= [
      {
          index: 0,
					name: 'launch vehicule',
					description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
					image: '../../assets/technology/image-launch-vehicle-portrait.png',
			},
      {
          index: 1,
					name: 'spaceport',
					description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
					image: '../../assets/technology/image-spaceport-portrait.png',

			},
      {
          index: 2,
					name: 'space capsule',
					description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
					image: '../../assets/technology/image-space-capsule-portrait.png',
			}
	]

	let currentTechnoItem = writable(technoItems[0]);
</script>

<main>
	<h1 class="text-white">{navBar[$navBarIndex].title}</h1>
	<div class="flex flex-row">
		<div class="flex flex-col">
			{#each technoItems as techno}
				<button
						on:click={() => currentTechnoItem.set(techno)}
						class="bg-black py-3 px-5 text-white rounded-full border-white border-2"
				>
					{techno.index + 1}
				</button>
			{/each}
		</div>
		<div>
			<p class="text-tahiti">THE TERMINOLOGY…</p>
			<h2 class="text-white">{$currentTechnoItem.name}</h2>
			<p class="text-white">{$scurrentTechnoItem.description}</p>
		</div>
		<img src={$currentTechnoItem.image} alt="image technology" />
	</div>
</main>