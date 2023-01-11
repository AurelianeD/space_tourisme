<script lang="ts">
	export let navBar;
	export let navBarIndex;

	import Button from "../Button.svelte";
</script>

<main class="flex flex-col lg:justify-between lg:mt-52 lg:flex-row">
	<div class="py-10 px-7 md:px-40 md:pl-48 lg:px-32">
		<h2 class="font-barlow text-h5-phone text-tahiti uppercase text-center md:text-h5-tablet lg:text-h5 lg:text-left ">So, you want to travel to</h2>
		<h1 class="font-bellefair text-white text-h1-phone text-center py-5 md:text-h1 lg:text-left">SPACE</h1>
		<p class="font-barlowRegular text-center text-tahiti text-body-phone md:text-body lg:w-2/3 lg:text-left">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
	</div>
	<div class="self-center">
		<Button />
	</div>
</main>