<script lang="ts">
	export let title: string = 'Untitled';
</script>

<header class="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-primary px-4">
	<slot />
	<input class="bg-transparent text-2xl font-bold outline-none" bind:value={title} />
</header>
