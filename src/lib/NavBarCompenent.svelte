<script lang="ts">

	import {writable} from "svelte/store";

  export let navBar;
	export let navBarIndex;
	export let background;

	let src: string = '../../public/assets/shared/logo.svg'

	let navbarStyle: string = 'mr-10 flex flex-col pb-5 '

	let showMenu = writable(false);

</script>

<main class="flex flex-row justify-between pt-10 px-5 md:pt-5 md:pl-10 items-center">
	<div>
		<img {src} alt="logo"/>
	</div>
	<span class="hidden bg-tahiti h-0.5 text-transparent z-10 w-96 lg:block"></span>
	<div class="flex flex-row bg-whiteOpacity z-0 hidden md:flex md:pt-7 md:px-10 lg:px-32">
		{#each navBar as nav}
			<a href="#"
				 on:click="{() => {
					 navBarIndex.set(nav.index);
					 background.set(nav.bg);
				 }}"
				 class={nav.index === $navBarIndex ? navbarStyle + 'border-b-2 border-white' : navbarStyle + 'hover:border-b-2 hover:border-white/50'}
			>
				<div class="lg:flex lg:flex-row items-center">
					<span class="text-white font-barlowBold mr-3 hidden lg:flex lg:text-navText ">{`0${nav.index}`}</span>
					<span class="text-white uppercase text-navText font-barlow md:text-subheading2">{nav.name}</span>
				</div>
			</a>
		{/each}
	</div>
	<div class=" sm:block md:hidden" on:click={() =>{showMenu.set(true)}}>
		<img src="../../public/assets/icons/hamburger.svg" alt="hamburger icon"/>
	</div>

	{#if $showMenu}
		<div class="backdrop-blur-lg h-screenHeight w-2/3 absolute right-0.5 top-0 z-10">
			<img
				src="../../public/assets/icons/cross.png"
				alt=	"croix icon"
				on:click={() => {showMenu.set(false)}}
				class="relative top-14 left-56"
			/>
			{#each navBar as nav}
				<a href="#"
					 on:click={() => {
						 navBarIndex.set(nav.index);
						 background.set(nav.bg);
						 showMenu.set(false);
					 }}

				>
					<div class="flex flex-row gap-2 relative top-32 left-10 mb-10">
						<p class="font-barlowBold text-navText text-white">{`0${nav.index}`}</p>
						<p class="font-barlow text-navText text-white uppercase">{nav.name}</p>
					</div>
				</a>
			{/each}
		</div>
	{/if}

</main>