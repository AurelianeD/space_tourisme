<script lang="ts">

	export let navBar;
	export let navBarIndex;

	let src = '../../public/assets/shared/logo.svg'

	let navbarStyle: string = 'mr-10 flex flex-col pb-5 hover:border-b-2 hover:border-white/50'
//TODO : fix style navBar when hover

</script>

<div class="flex flex-row justify-between pt-5 pl-10 items-center">
	<div>
		<img {src} alt="logo"/>
	</div>
	<span class="bg-tahiti h-0.5 text-transparent z-10 w-96">hello</span>
	<div class="flex flex-row bg-whiteOpacity px-32 pt-7 z-0">
		{#each navBar as nav}
			<a href="#"
				 on:click="{() => {$navBarIndex= nav.index}}"
				 class={nav.index === $navBarIndex ? navbarStyle + 'border-b-2 border-white' : navbarStyle}
			>
				<div>
					<span class="text-white text-navText font-barlowBold text-2xl mr-3">{`0${nav.index}`}</span>
					<span class="text-white text-2xl uppercase text-navText font-barlow">{nav.name}</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.blur{
			backdrop-filter: blur(20px);
	}
</style>