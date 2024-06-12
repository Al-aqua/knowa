<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ArrowBigLeft from 'lucide-svelte/icons/arrow-big-left';
	import { page } from '$app/stores';

	const navigation = [
		{
			title: 'Profile',
			href: '/settings/profile'
		},
		{
			title: 'Account',
			href: '/settings/account'
		},
		{
			title: 'Security',
			href: '/settings/security'
		}
	];
</script>

<div class="flex h-svh w-svw flex-col">
	<header class="sticky top-0 flex h-16 w-full gap-4 border-b border-primary p-4">
		<Button href="/workstation" variant="ghost" class="" size="icon"><ArrowBigLeft /></Button>
		<h1 class="text-3xl font-bold">Settings</h1>
	</header>
	<div class="flex h-full w-full gap-16 p-4">
		<ul class="flex flex-col gap-2 p-4">
			{#each navigation as item}
				<li>
					<Button
						variant={$page.url.pathname === item.href ? 'default' : 'ghost'}
						class="h-16 w-full font-medium"
						href={item.href}>{item.title}</Button
					>
				</li>
			{/each}
		</ul>
		<slot />
	</div>
</div>
