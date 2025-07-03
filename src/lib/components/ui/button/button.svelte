<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonEvents, ButtonProps } from './index.js';
	import { buttonVariants } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = ButtonProps & HTMLButtonAttributes;
	type $$Events = ButtonEvents;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let builders: $$Props['builders'] = [];
	export { className as class };

	$: builderProps = builders.reduce((acc, builder) => ({ ...acc, ...builder }), {});
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...builderProps}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</button>