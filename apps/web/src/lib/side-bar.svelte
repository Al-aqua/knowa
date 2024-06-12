<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import Settings from 'lucide-svelte/icons/settings';
	import { Button } from '$lib/components/ui/button';

	export let avatar;
	export let fallbackAvatar = 'Know';
	export let username;
</script>

<div class="h-screen border-b border-r border-primary">
	<header class="flex h-16 items-center border-b border-primary px-4">
		<Avatar.Root>
			<!-- TODO: Link with the backend   -->
			<Avatar.Image src={avatar} alt="@shadcn" />
			<Avatar.Fallback>{fallbackAvatar}</Avatar.Fallback>
		</Avatar.Root>
		<p class="ml-2 font-bold">{username}</p>
		<Button href="/settings" variant="ghost" class="ml-auto" size="icon"><Settings /></Button>
	</header>
</div>
