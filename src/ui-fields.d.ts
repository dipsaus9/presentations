import { UIFields } from 'vue-ui-fields';
declare module 'vue/types/vue' {
	// 3. Declare augmentation for Vue
	interface Vue {
		$uiFields: UIFields;
	}
}
