<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import SquareChevronRight from 'lucide-svelte/icons/square-chevron-right';
	import SaquareChevronLeft from 'lucide-svelte/icons/square-chevron-left';

	import Editor from '$lib/editor/index.svelte';
	import Bar from '$lib/editor/bar.svelte';
	import SideBar from '$lib/side-bar.svelte';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { getImageUrl } from '$lib/utils';

	export let data;

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

	function createFile() {}
	let files = data.files;
</script>

<div class="flex">
	{#if isOpen}
		<div
			in:slide={{ axis: 'x', duration: 200 }}
			out:slide={{ axis: 'x', duration: 200 }}
			class="w-1/4"
		>
			<SideBar
				avatar={data?.user?.avatar
					? getImageUrl(data.user?.collectionId, data.user?.id, data.user?.avatar)
					: `https://ui-avatars.com/api/?name=${data?.user?.name}`}
				fallbackAvatar={data?.user?.name}
				username={data?.user?.name}
				{createFile}
				{files}
			/>
		</div>
	{/if}

	<div class={isOpen ? 'w-3/4' : 'w-full'}>
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
