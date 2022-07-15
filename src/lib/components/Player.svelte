<script>
	import howler, { Howler } from 'howler';

	// Enabling Howler.js audio support
	const Howl = howler.Howl;

	// Initialize play state as false when the site loads
	let playing = false;

	// Bring in song name data
	const gum = 'GUM';
	const swimmingLessons = 'SWIMMING LESSONS';
	const theKing = 'THE KING';
	const minutes = 'MINUTES';
	const songs = [gum, swimmingLessons, theKing, minutes];

	// Establish a variable to hold the current song index from songs array
	let currentIndex = 0;
	let currentSong = songs[currentIndex];

	////////////////////////
	// INITIALIZING HOWLS //
	////////////////////////

	//
	const gumAudio = new Howl({
		src: ['../../static/audio/Gum.mp3'],
		loop: false,
		html5: true,
		volume: 0.7,
		onend: function () {
			playing = false;
		}
	});

	const swimmingLessonsAudio = new Howl({
		src: ['../../static/audio/SwimmingLessons.mp3'],
		loop: false,
		html5: true,
		volume: 0.9,
		onend: function () {
			playing = false;
		}
	});

	const theKingAudio = new Howl({
		src: ['../../static/audio/TheKing.mp3'],
		loop: false,
		html5: true,
		volume: 0.9,
		onend: function () {
			playing = false;
		}
	});

	const minutesAudio = new Howl({
		src: ['../../static/audio/Minutes.mp3'],
		loop: false,
		html5: true,
		volume: 1.0,
		onend: function () {
			playing = false;
		}
	});

	////////////////////////////////////
	// AUDIO PLAYER CONTROL FUNCTIONS //
	////////////////////////////////////

	// Functions to handle playing songs based onsong index position
	const playClick = () => {
		playing = !playing;

		if (currentIndex === 0) {
			return gumAudio.play();
		} else if (currentIndex === 1) {
			return swimmingLessonsAudio.play();
		} else if (currentIndex === 2) {
			return theKingAudio.play();
		} else if (currentIndex === 3) {
			return minutesAudio.play();
		}
	};

	// Function to handle pausing all howls/songs and change the playing boolean
	const allPause = () => {
		playing = !playing;
		gumAudio.pause();
		swimmingLessonsAudio.pause();
		theKingAudio.pause();
		minutesAudio.pause();
	};

	// Function to handle stopping all howls/songs
	const allStop = () => {
		gumAudio.stop();
		swimmingLessonsAudio.stop();
		theKingAudio.stop();
		minutesAudio.stop();
	};

	// Functions to handle progressing and regressing through the songs array. By skipping forward and backward it also stops the current song and initiates the next
	function previousClick() {
		currentIndex -= 1;

		if (currentIndex === -1) {
			currentIndex = 3;
		}

		currentSong = songs[currentIndex];

		playing = false;

		allStop();
		playClick();
	}

	function nextClick() {
		currentIndex += 1;

		if (currentIndex > songs.length - 1) {
			currentIndex = 0;
		}

		currentSong = songs[currentIndex];

		playing = false;

		allStop();
		playClick();
	}

	// Functions for users to choose songs out of order via click which, in turn, stops current audio and highlights chosen song
	function gumClick() {
		currentSong = gum;
		currentIndex = 0;
		playing = false;
		allStop();
	}

	function swimmingLessonsClick() {
		currentSong = swimmingLessons;
		currentIndex = 1;
		playing = false;
		allStop();
	}

	function theKingClick() {
		currentSong = theKing;
		currentIndex = 2;
		playing = false;
		allStop();
	}

	function minutesClick() {
		currentSong = minutes;
		currentIndex = 3;
		playing = false;
		allStop();
	}
</script>

<!-- Top Song Container -->
<section class="flex justify-between">
	<!-- Gum Container -->
	<div class="flex flex-col">
		{#if currentSong === gum}
			<p class="flex transform rotate-90 ml-3 mb-[-1rem] text-gray-400 font-extrabold">1</p>
			<p class="flex ml-4 font-extrabold text-2xl transform rotate-90">
				{gum}
			</p>
		{:else}
			<p
				on:click={gumClick}
				class="flex transform rotate-90 ml-3 mb-[-1rem] text-gray-600/70 font-extrabold cursor-pointer"
			>
				1
			</p>
			<button
				on:click={gumClick}
				class="flex ml-4 font-extrabold text-2xl transform rotate-90 text-gray-600/70 cursor-pointer"
			>
				{gum}
			</button>
		{/if}
	</div>

	<!-- Minutes Container -->
	<div class="flex flex-col">
		{#if currentSong === minutes}
			<p class="flex font-extrabold text-2xl mr-[-0.7rem] mb-1 transform rotate-270">
				{minutes}
			</p>
			<p class="flex transform rotate-270 ml-[0.95rem] text-gray-400 font-extrabold">4</p>
		{:else}
			<p
				on:click={minutesClick}
				class="flex font-extrabold text-2xl mr-[-0.7rem] mb-1 transform rotate-270 text-gray-600/70 cursor-pointer"
			>
				{minutes}
			</p>
			<button
				on:click={minutesClick}
				class="flex transform rotate-270 ml-[0.95rem] text-gray-600/70 font-extrabold cursor-pointer"
				>4</button
			>
		{/if}
	</div>
</section>

<main class="flex flex-col mx-auto justify-between">
	<!-- Buttons Container -->
	<div class="flex justify-center items-center">
		<!-- Previous Button -->
		<button
			on:click={previousClick}
			class="m-6 hover:scale-105 transform transition duration-300 ease-out active:scale-95"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 123 118">
				<g id="Group_5" data-name="Group 5" transform="translate(-596 -395)">
					<path
						id="Polygon_9"
						data-name="Polygon 9"
						d="M59,0l59,106H0Z"
						transform="translate(613 513) rotate(-90)"
						fill="#fff"
					/>
					<rect
						id="Rectangle_8"
						data-name="Rectangle 8"
						width="35"
						height="118"
						transform="translate(631 513) rotate(180)"
						fill="#fff"
					/>
				</g>
			</svg>
		</button>

		<!-- Conditional Play/Pause Blocks -->
		{#if !playing}
			<!-- Play Button -->
			<button
				on:click={playClick}
				class="hover:scale-105 transform transition duration-300 ease-out active:scale-95 align-middle mx-4 mr-[0.8rem]"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 262 303">
					<path
						id="Polygon_1"
						data-name="Polygon 1"
						d="M151.5,0,303,262H0Z"
						transform="translate(262) rotate(90)"
						fill="#fff"
					/>
				</svg>
			</button>
		{:else}
			<!-- Pause Button -->
			<button
				on:click={allPause}
				class="hover:scale-105 transform transition duration-300 ease-out active:scale-95 align-middle mx-4"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 218 257">
					<g id="Group_8" data-name="Group 8" transform="translate(-824 -648)">
						<rect
							id="Rectangle_3"
							data-name="Rectangle 3"
							width="88"
							height="257"
							transform="translate(824 648)"
							fill="#fff"
						/>
						<rect
							id="Rectangle_4"
							data-name="Rectangle 4"
							width="88"
							height="257"
							transform="translate(954 648)"
							fill="#fff"
						/>
					</g>
				</svg>
			</button>
		{/if}

		<!-- Next Button -->
		<button
			on:click={nextClick}
			class="m-6 hover:scale-105 transform transition duration-300 ease-out active:scale-95"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 123 118">
				<g id="Group_7" data-name="Group 7" transform="translate(-1210 -395)">
					<path
						id="Polygon_12"
						data-name="Polygon 12"
						d="M59,0l59,106H0Z"
						transform="translate(1316 395) rotate(90)"
						fill="#fff"
					/>
					<path
						id="Path_1"
						data-name="Path 1"
						d="M0,0H35V118H0Z"
						transform="translate(1298 395)"
						fill="#fff"
					/>
				</g>
			</svg>
		</button>
	</div>
</main>

<!-- Bottom Song Container -->
<section class="flex justify-between">
	<!-- Swimming Lessons Container -->
	<div class="flex flex-col">
		{#if currentSong === swimmingLessons}
			<p class="flex transform rotate-90 ml-[-5.5rem] mb-[-0.7rem] text-gray-400 font-extrabold">2</p>
			<p class="flex ml-[-5.1rem] font-extrabold text-2xl transform rotate-90">
				{swimmingLessons}
			</p>
		{:else}
			<p
				on:click={swimmingLessonsClick}
				class="flex transform rotate-90 ml-[-5.5rem] mb-[-0.7rem] text-gray-600/70 font-extrabold cursor-pointer"
			>
				2
			</p>
			<button
				on:click={swimmingLessonsClick}
				class="flex ml-[-5.1rem] font-extrabold text-2xl transform rotate-90 text-gray-600/70 cursor-pointer"
			>
				{swimmingLessons}
			</button>
		{/if}
	</div>

	<!-- The King Container -->
	<div class="flex flex-col">
		{#if currentSong === theKing}
			<p class="flex font-extrabold text-2xl mr-[-1rem] mb-[-0.3rem] transform rotate-270">
				{theKing}
			</p>
			<p class="flex transform rotate-270 ml-[0.5rem] mr-[-0.8rem] text-gray-400 font-extrabold">3</p>
		{:else}
			<button
				on:click={theKingClick}
				class="flex font-extrabold text-2xl mr-[-1rem] mb-[-0.3rem] transform rotate-270 text-gray-600/70 cursor-pointer"
			>
				{theKing}
			</button>
			<p
				on:click={theKingClick}
				class="flex transform rotate-270 ml-[0.5rem] mr-[-0.8rem] text-gray-600/70 font-extrabold cursor-pointer"
			>
				3
			</p>
		{/if}
	</div>
</section>
