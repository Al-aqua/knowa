<svelte:options accessors={true} />

<script lang="ts">
	import type { Editor } from '@tiptap/core';

	export let editor: Editor, range, items;
	let selectedIndex = 0;
	let elements: HTMLElement[] = [];
	$: {
		if (elements[0] != null) {
			elements[selectedIndex]?.scrollIntoView({
				block: 'nearest',
				behavior: 'smooth'
			});
		}
	}
	function handleKeydown(e) {
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = (selectedIndex + items.length - 1) % items.length;
			return true;
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % items.length;
			return true;
		}

		if (e.key === 'Enter') {
			e.preventDefault();
			const item = items[selectedIndex];

			if (item) {
				item.command({ editor, range });
			}
			return true;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="z-50 h-96 w-96 max-w-full overflow-scroll rounded-lg border bg-white shadow-xl">
	<div class="p-2 text-sm text-gray-500">BLOCKS</div>
	<ul
		class="mt-2 divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		tabindex="-1"
		role="listbox"
		aria-labelledby="slash-command-menu"
		aria-activedescendant="listbox-option-0"
	>
		{#each items as { title, subtitle, command }, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				class="cursor-pointer select-none p-4 text-sm text-gray-900 {i == selectedIndex
					? 'bg-gray-100'
					: 'bg-white'}"
				id="listbox-option-0"
				on:mouseenter={() => (selectedIndex = i)}
				on:click={() => {
					command({ editor, range });
				}}
				bind:this={elements[i]}
			>
				<div class="flex flex-col">
					<div class="flex justify-between">
						<p class="font-normal">{title}</p>
					</div>
					<p class="mt-2 text-gray-500" style="line-height: 1">{subtitle}</p>
				</div>
			</li>
		{/each}
	</ul>
</div>
