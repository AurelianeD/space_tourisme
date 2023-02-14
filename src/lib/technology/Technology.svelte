<script lang="ts">
	import {writable} from "svelte/store";

	export let navBar;
	export let navBarIndex: number;

	const technoItems= [
      {
          index: 0,
					name: 'launch vehicule',
					description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
					image: 'assets/technology/image-launch-vehicle-portrait.jpg',
			},
      {
          index: 1,
					name: 'spaceport',
					description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
					image: 'assets/technology/image-spaceport-portrait.jpg',

			},
      {
          index: 2,
					name: 'space capsule',
					description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
					image: 'assets/technology/image-space-capsule-portrait.jpg',
			}
	]

	let currentTechnoItem = writable(technoItems[0]);
	let navigationStyle: string = ' rounded-full border-2 font-bellefair text-center py-2 md:py-3 px-4 md:px-7 text-navText md:text-h4 '
</script>

<main class="flex flex-col">
	<h1 class="font-barlow text-h5-phone text-center my-10 md:text-left md:ml-10">
		<span class="text-white opacity-25 font-barlowBold mr-2">0{$navBarIndex}</span>
		<span class="text-white uppercase">{navBar[$navBarIndex].title}</span>
	</h1>
	<div class="flex flex-col  lg:flex-row lg:ml-36 md:pb-10">
		<div class="flex   items-center order-2 lg:order-1 gap-7 lg:gap-16 flex-col  lg:flex-row mt-10 md:mt-16 lg:mt-28 ">
			<div class="flex gap-5 justify-center md:pb-5 flex-row lg:flex-col lg:gap-10 lg:h-full">
				{#each technoItems as techno}
					<button
						on:click={() => currentTechnoItem.set(techno)}
						class={techno.index === $currentTechnoItem.index ? navigationStyle + 'bg-white text-black' : navigationStyle + 'bg-black border-white/50 text-white hover:border-white'}
					>
						{techno.index + 1}
					</button>
				{/each}
			</div>
			<div class="text-center lg:text-left w-[80%] md:w-[60%] lg:w-full">
				<p class="text-tahiti font-barlow md:text-navText text-subheading2">THE TERMINOLOGY…</p>
				<h2 class="text-white font-bellefair uppercase text-h3Phone md:text-h3 ">{$currentTechnoItem.name}</h2>
				<p class="pt-5 text-tahiti font-barlowRegular text-body-phone md:text-body  ">{$currentTechnoItem.description}</p>
			</div>
		</div>
		<img src={$currentTechnoItem.image} alt="image technology" class="h-60 lg:h-full object-cover object-bottom order-1 lg:order-2 lg:pl-20"/>
	</div>
</main>