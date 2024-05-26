<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import Settings from 'lucide-svelte/icons/settings';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="h-screen border-b border-r border-primary">
	<header class="flex h-16 items-center border-b border-primary px-4">
		<Avatar.Root>
			<!-- TODO: Link with the backend   -->
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<p class="ml-2 font-bold">Username</p>
		<Button variant="ghost" class="ml-auto" size="icon"><Settings /></Button>
	</header>
</div>
