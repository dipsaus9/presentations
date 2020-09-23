<template>
	<div class="reveal">
		<div class="slides">
			<section>
				Single Horizontal Slide
				<pre>
					<code data-trim data-noescape>
const test = Reveal();
const test = Reveal();
const test = Reveal();
const test = Reveal();
const test = Reveal();
					</code>
				</pre>
			</section>
			<section>Second slide</section>
		</div>
	</div>
</template>

<script>
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/sky.css';
import 'reveal.js/plugin/highlight/monokai.css';

export default {
	mounted() {
		let deck = new Reveal({
			plugins: [Highlight],
		});
		deck.initialize();
	},
};
</script>
<style style="scss">
body .reveal pre {
	width: 100%;
	display: flex;
}
body .reveal code {
	height: 100%;
	width: 100%;
	padding: 1rem !important;
}
</style>
