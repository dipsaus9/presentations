<template>
	<div id="app">
		<SlideShow />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SlideShow from './components/SlideShow.vue';

@Component({
	components: {
		SlideShow,
	},
})
export default class App extends Vue {}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #101010;
	width: 100%;
	height: 100%;
}
</style>
