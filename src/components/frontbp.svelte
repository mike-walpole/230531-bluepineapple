<script>
	import { onMount } from 'svelte';

	import jQuery from 'jquery';

	onMount(() => {
		window.jQuery = jQuery;

		var Messenger = function (el) {
			'use strict';
			var m = this;

			m.init = function () {
				m.codeletters = '&#*+%?£@§$';
				m.message = 0;
				m.current_length = 0;
				m.fadeBuffer = false;
				m.messages = ['transparent', 'hyper-collaborative', 'always beta', 'Bluepineapple'];

				setTimeout(m.animateIn, 500);
			};

			m.generateRandomString = function (length) {
				var random_text = '';
				while (random_text.length < length) {
					random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
				}

				return random_text;
			};

			m.animateIn = function () {
				if (m.current_length < m.messages[m.message].length) {
					m.current_length = m.current_length + 2;
					if (m.current_length > m.messages[m.message].length) {
						m.current_length = m.messages[m.message].length;
					}

					var message = m.generateRandomString(m.current_length);
					jQuery(el).html(message);

					setTimeout(m.animateIn, 20);
				} else {
					setTimeout(m.animateFadeBuffer, 20);
				}
			};

			m.animateFadeBuffer = function () {
				if (m.fadeBuffer === false) {
					m.fadeBuffer = [];
					for (var i = 0; i < m.messages[m.message].length; i++) {
						m.fadeBuffer.push({
							c: Math.floor(Math.random() * 12) + 1,
							l: m.messages[m.message].charAt(i)
						});
					}
				}

				var do_cycles = false;
				var message = '';

				for (var i = 0; i < m.fadeBuffer.length; i++) {
					var fader = m.fadeBuffer[i];
					if (fader.c > 0) {
						do_cycles = true;
						fader.c--;
						message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
					} else {
						message += fader.l;
					}
				}

				jQuery(el).html(message);

				if (do_cycles === true) {
					setTimeout(m.animateFadeBuffer, 100);
				} else {
					setTimeout(m.cycleText, 1000);
				}
			};

			m.cycleText = function () {
				m.message = m.message + 1;
				if (m.message >= m.messages.length) {
					document
						.getElementById('section-2')
						.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
					m.end();
				}

				m.current_length = 0;
				m.fadeBuffer = false;
				jQuery(el).html('');

				setTimeout(m.animateIn, 20);
			};

			m.init();
		};

		console.clear();
		var messenger = new Messenger(jQuery('#messenger'));
	});
</script>

<section class="h-screen w-screen bg-black flex flex-col">
	<img class="mt-8 ml-5 w-36 md:w-48 grayscale invert" src="/bp-logo.webp" alt="logo" />
	<div class="pl-5 mt-auto pb-28 md:pb-8">
		<div class="md:h-28 h-12 text-4xl md:text-9xl font-bold text-white mt-auto">
			10x performance is
		</div>

		<div
			id="messenger"
			class="md:h-36 h-14 text-4xl md:text-9xl font-bold text-white mt-auto overflow-hidden"
		>
			loading...
		</div>
	</div>
</section>
