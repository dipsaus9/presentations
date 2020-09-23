<template>
	<div class="reveal">
		<div class="slides">
			<section>Vue UI Fields</section>
			<section>
				<div>
					<h3>Wat is het?</h3>
					<p class="fragment fade-up">Component library in Vue om volledige formulieren mee te maken</p>
				</div>
			</section>
			<section>
				<div>
					<h3>Waarom?</h3>
					<p class="fragment fade-up">Consistent formulieren te maken</p>
				</div>
			</section>
			<section>
				<div>
					<h3>Bestaande plugins</h3>
					<ul>
						<li class="fragment fade-up">Vuetify</li>
						<li class="fragment fade-up">Vue formulate</li>
						<li class="fragment fade-up">Vue components + Vuex</li>
						<li class="fragment fade-up">Bootstrap</li>
					</ul>
				</div>
			</section>
			<section>
				<div>
					<h3>Problemen?</h3>
					<ul>
						<li class="fragment fade-up">Consistent HTML</li>
						<li class="fragment fade-up">Data manipulatie <sup>*</sup></li>
						<li class="fragment fade-up">Validatie <sup>*</sup></li>
						<li class="fragment fade-up">Complexe logica <sup>*</sup></li>
						<li class="fragment fade-up">Sessie beheer</li>
						<li class="fragment fade-up">Form submission <sup>*</sup></li>
					</ul>
				</div>
			</section>
			<section>
				<div>
					<h3>Data manipulatie (op basis van JSON structuur)</h3>
					<pre>
						<code data-trim data-noescape  data-line-numbers="2-7">
[
	{
		"type": "text",
		"label": "First input",
		"validation": "required",
		"placeholder": "Enter your text"
	}
]
						</code>
					</pre>
				</div>
			</section>
			<section>
				<div>
					<h3>Validatie</h3>
					<pre>
						<code data-trim data-noescape data-line-numbers="1-6|8-15">
// Validation.js
const ValidationRule = (value: InputValue) => boolean {
	if (value.length > 10) return true;
	
	return false;
}

// Settings
{
	"type": "text",
	"label": "First input with min length of 10",
	"validation": ValidationRule,
	"placeholder": "Enter your text"
}
						</code>
					</pre>
				</div>
			</section>
			<section>
				<div>
					<h3>Complexe logica</h3>
					<UiFieldsTest />
				</div>
			</section>
			<section>
				<div>
					<h3>Form submission</h3>
					<pre>
						<code data-trim data-noescape  data-line-numbers="2-8|10-11">
// JS
const FormSubmissionHandler = async (formData: any) => {
	const response = await axios.post('myURL', formData);	
	if (response) {
		// Ref to Vue component data
		this.succes = true;
	}
}

// Settings
this.$uiFields.onSubmit('checkout', FormSubmissionHandler);
						</code>
					</pre>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import 'reveal.js/plugin/highlight/monokai.css';

import UiFieldsTest from './UiFieldsTest.vue';
export default {
	components: {
		UiFieldsTest,
	},
	mounted() {
		let deck = new Reveal({
			plugins: [Markdown, Highlight],
		});
		deck.initialize();
	},
};
</script>
<style lang="scss">
body .reveal pre {
	width: 100%;
	display: flex;
}
body .reveal code {
	height: 100%;
	width: 100%;
	padding: 1rem !important;
}

body .reveal section {
}
body .reveal section > div {
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
body .reveal {
	p,
	h3,
	a,
	li,
	ul {
		text-align: left !important;
	}
}
</style>
