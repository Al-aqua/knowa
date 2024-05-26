<script lang="ts">
	import { EllipsisVertical } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	export let title: string = 'Untitled';
</script>

<div>
	<header
		class=" sticky top-0 z-10 flex h-16 items-center justify-between gap-4 border-b border-primary px-4"
	>
		<div class="flex items-center gap-4">
			<slot />
			<input class="bg-transparent text-2xl font-bold outline-none" bind:value={title} />
		</div>

		<div class="flex items-center gap-4">
			<p class="text-2xl font-bold">Know</p>
			<Button variant="ghost" size="icon"><EllipsisVertical /></Button>
		</div>
	</header>
</div>
