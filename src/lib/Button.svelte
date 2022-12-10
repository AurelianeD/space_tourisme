<main class="">
	<button class="bg-white rounded-full largeButton mt-40 px-16 py-18 mr-28">
		<p class="font-bellefair text-h4 text-black uppercase">Explore</p>
	</button>
</main>

<style>
	.largeButton{
		position: relative;
		z-index: 1;
		aspect-ratio: 1;
	}

	.largeButton::after{
		content: "";
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 50%;
		opacity: 0;
		transition: opacity 500ms linear, transform 750ms ease-in-out;
	}

	.largeButton:hover::after{
		opacity: 1;
		transform: scale(1.5);
	}
</style>