<script lang="ts">
  import TailwindCss from './tailwindCSS.svelte';
  import NavBar from "./lib/NavBar.svelte";
  import {writable} from "svelte/store";
  import Destination from "./lib/destination/Destination.svelte";
  import Home from "./lib/home/Home.svelte";
  import Crew from "./lib/crew/Crew.svelte";
  import Technology from "./lib/technology/Technology.svelte";

  const navBar = [
    {
      index: 0,
      name: 'Home',
      bg: './assets/home/background-home-desktop.jpg',
    },
    {
      index: 1,
      name: 'Destination',
      bg: './assets/destination/background-destination-desktop.jpg',
      title: 'Pick your destination'
    },
    {
      index: 2,
      name: 'Crew',
      bg: './assets/crew/background-crew-desktop.jpg',
      title: 'Meet your crew'
    },
    {
      index: 3,
      name: 'Technology',
      bg: './assets/technology/background-technology-desktop.jpg',
      title: 'Space launch 101'
    }
  ]

  const navBarIndex = writable(0);

</script>

<main>
  <TailwindCss />
  <NavBar {navBar} {navBarIndex}/>
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
  main {
    width: 100vw;
    height: 100vh;
    background-image: url('../public/assets/home/background-home-desktop.jpg');
  }
</style>