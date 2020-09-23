import Vue from 'vue';
import App from './App.vue';
import UiFields from 'vue-ui-fields';

Vue.use(UiFields);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
