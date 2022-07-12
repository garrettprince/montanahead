<script>
	let isHidden = false;

	screen.addEventListener('orientationchange', function () {
		isHidden = true;
	});
</script>

<main class="flex align-bottom">
	<div class="flex-col justify-center mx-auto my-6">
		<p class:hidden={isHidden} class="flex justify-center font-light text-xs text-gray-500">
			Interested in producing?
		</p>
		<p class:hidden={isHidden} class="flex justify-center font-light text-xs text-gray-500">
			Joining Montanahead?
		</p>
		<button
			class="flex mx-auto font-bold transform lg:transition lg:ease-out lg:hover:scale-105 lg:duration-[500ms] lg:hover:font-nhaasbd lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r from-orange-600 to-pink-600 "
			>hello@montanahead.com</button
		>
	</div>
</main>
