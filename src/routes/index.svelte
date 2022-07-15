<script>
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Player from '../lib/components/Player.svelte';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<body
		in:fade={{ delay: 500, duration: 2000 }}
		class="flex flex-col justify-center h-screen max-w-3xl mx-auto"
	>
		<header class="">
			<Nav />
		</header>
		<main class="flex flex-col justify-evenly h-full lg:h-3/5">
			<Player />
		</main>
		<Footer />
	</body>
{/if}
