<script>

	export let navBar;
	export let navBarIndex;

	let src = '../../public/assets/shared/logo.svg'


</script>

<div class="flex flex-row justify-between pt-5 pl-10 items-center">
	<div>
		<img {src} alt="logo"/>
	</div>
	<span class="bg-tahiti h-0.5 text-transparent z-10 w-96">hello</span>
	<div class="flex flex-row bg-whiteOpacity px-32 blur pt-7">
		{#each navBar as nav}
			<a href="#" on:click="{() => {$navBarIndex= nav.index}}" class="mr-10 flex flex-col">
				<div>
					<span class="text-white text-navText font-barlowBold text-2xl mr-3">{`0${nav.index}`}</span>
					<span class="text-white text-2xl uppercase text-navText font-barlow">{nav.name}</span>
				</div>
				{#if (nav.index === $navBarIndex) }
					<span class="bg-white h-0.5 text-transparent mt-7 hover:bg-tahiti">hello</span>
					{:else}
					<span class=" h-0.5 text-transparent mt-7">hello</span>
				{/if}

			</a>
		{/each}
	</div>
</div>

<style>
	.blur{
			backdrop-filter: blur(20px);
	}
</style>