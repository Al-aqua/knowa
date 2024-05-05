<script lang="ts">
	import type { PageData } from './$types.js';
	import LoginForm from './reset-password-form.svelte';
	export let data: PageData;
</script>

<div
	class="grid w-full grid-cols-1 overflow-hidden p-4 lg:grid-cols-2"
	style="height: calc(100vh - 64px)"
>
	<div class="relative hidden lg:block">
		<img
			src="/auth-bg.jpg"
			alt="Register"
			class="h-full w-full rounded-md object-cover"
			style="object-fit: cover;"
		/>
		<img
			src="/vector.svg"
			alt="Text background"
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
		/>
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
			<h2 class="text-nowrap text-4xl font-semibold text-background">Knowledge with a new</h2>
			<h2 class="mt-4 text-6xl font-bold text-background">Perspective</h2>
		</div>
	</div>
	<LoginForm data={data.form} />
</div>
