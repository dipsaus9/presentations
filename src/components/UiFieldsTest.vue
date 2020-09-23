<template>
	<div>
		<UiFields name="checkout" class="form" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UiFieldsTest extends Vue {
	created() {
		this.$uiFields.new('checkout');
		this.$uiFields.setFields('checkout', [
			{
				name: 'optional_value',
				type: 'checkbox',
				options: [
					{
						value: 'true',
						label: 'Do you want to ship your order to a different address?',
					},
				],
			},
			{
				name: 'shipping_address',
				label: 'Shipping Address here',
				validation: [
					{
						name: 'custom',
						options: 'UiFields is awesome',
						message: 'Is not matching the validation',
						validation: (value: any, option: any) => value.toLowerCase() === option.toLowerCase(),
					},
				],
			},
		]);
		this.$uiFields.setCondition(
			'checkout',
			'optional_value',
			(val: any) => {
				if (Array.isArray(val)) {
					return val.includes('true');
				}
				return false;
			},
			'checkout',
			'shipping_address'
		);
	}
}
</script>

<style lang="scss">
.form {
	flex-direction: column;
	div,
	& {
		justify-content: flex-start;
		display: flex;
	}
	div {
		margin-bottom: 1rem;
	}
	#checkout_shipping_address {
		width: 320px;
	}
	label {
		margin-left: 1rem;
	}
}
</style>
