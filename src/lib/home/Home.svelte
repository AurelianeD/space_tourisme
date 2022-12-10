<script lang="ts">
	export let navBar;
	export let navBarIndex;

	import Button from "../Button.svelte";
</script>

<main class="flex flex-row justify-between pt-64 pb-20">
	<div class="bg-red pl-40  w-1/2">
		<h1 class="font-barlow text-h5 text-tahiti uppercase">So, you want to travel to</h1>
		<h1 class="font-bellefair text-h1 text-white">SPACE</h1>
		<p class="font-barlow text-body text-tahiti">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
	</div>
	<Button />
</main>