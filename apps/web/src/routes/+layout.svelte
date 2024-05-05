<script>
	import '../app.pcss';
	import NavBar from '$lib/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
</script>

<Toaster />

{#if $page.url.pathname !== '/workstation'}
	<NavBar />
{/if}
<slot></slot>
