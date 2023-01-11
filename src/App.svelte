<script lang="ts">
  import TailwindCss from './tailwindCSS.svelte';
  import NavBarComponent from "./lib/NavBarCompenent.svelte";
  import {writable} from "svelte/store";
  import Destination from "./lib/destination/Destination.svelte";
  import Home from "./lib/home/Home.svelte";
  import Crew from "./lib/crew/Crew.svelte";
  import Technology from "./lib/technology/Technology.svelte";

  const navBar = [
    {
      index: 0,
      name: 'Home',
      bg: '../public/assets/home/background-home-desktop.jpg',
    },
    {
      index: 1,
      name: 'Destination',
      bg: '../public/assets/destination/background-destination-desktop.jpg',
      title: 'Pick your destination'
    },
    {
      index: 2,
      name: 'Crew',
      bg: '../public/assets/crew/background-crew-desktop.jpg',
      title: 'Meet your crew'
    },
    {
      index: 3,
      name: 'Technology',
      bg: '../public/assets/technology/background-technology-desktop.jpg',
      title: 'Space launch 101'
    }
  ]

  const navBarIndex = writable(0);

  const background = writable('../public/assets/home/background-home-desktop.jpg');
  // let backgroundUrl = $background;

</script>

<main style="height: 100vh; overflow: auto;  width: 100vw; background: url({$background})">
  <TailwindCss />
  <NavBarComponent {navBar} {navBarIndex} {background}/>
  {#if $navBarIndex === 0}
    <Home {navBar} {navBarIndex}/>
  {:else if $navBarIndex === 1}
    <Destination {navBar} {navBarIndex}/>
  {:else if $navBarIndex === 2}
    <Crew {navBar} {navBarIndex}/>
  {:else if $navBarIndex === 3}
    <Technology {navBar} {navBarIndex}/>
  {/if}
</main>

<style>
</style>