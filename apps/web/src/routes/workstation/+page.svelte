<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SquareChevronRight from 'lucide-svelte/icons/square-chevron-right';
	import SaquareChevronLeft from 'lucide-svelte/icons/square-chevron-left';

	import Editor from '$lib/editor/index.svelte';
	import Bar from '$lib/editor/bar.svelte';
	import SideBar from '$lib/side-bar.svelte';
	import { onMount } from 'svelte';

	let isOpen: boolean;
	let title = 'Workstation';

	function setSideBarState() {
		if (window.innerWidth < 1024) {
			isOpen = false;
		} else {
			isOpen = true;
		}
	}

	onMount(() => {
		setSideBarState();
	});

	function toggleSideBar() {
		isOpen = !isOpen;
	}
</script>

<div class="grid grid-cols-4">
	<div class={isOpen ? 'block' : 'hidden'}>
		<SideBar />
	</div>

	<div class={isOpen ? 'col-span-3' : 'col-span-4'}>
		<Bar {title}>
			<Button variant="ghost" size="icon" on:click={toggleSideBar}>
				{#if isOpen}
					<SaquareChevronLeft />
				{:else}
					<SquareChevronRight />
				{/if}
			</Button>
		</Bar>
		<Editor />
	</div>
</div>
