<script>
	import '../app.pcss';
	import NavBar from '$lib/navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { page } from '$app/stores';
</script>

<Toaster />

{#if $page.url.pathname !== '/workstation'}
	{#if $page.url.pathname !== '/settings/profile' && $page.url.pathname !== '/settings/account' && $page.url.pathname !== '/settings/security'}
		<NavBar />
	{/if}
{/if}
<slot></slot>
