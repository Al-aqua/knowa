<script lang="ts">
	import { fileContent } from './file-store';

	export let files = [];
	export let filesRecords;

	function onFileClick(file) {
		filesRecords.forEach((fileRecord) => {
			if (file.name == fileRecord.name) {
				$fileContent = fileRecord.file;
				console.log($fileContent);
			}
		});
		// for (fileRecords on	filesRecords) {
		// 	if (file.name == fileRecords.name) {
		// 		$fileContent = fileRecords.content
		// 	}
		// }
	}
</script>

<ul>
	{#each files as file}
		<li>
			{#if file.type === 'folder'}
				<details class="folder">
					<summary>{file.name}</summary>
					<svelte:self files={file.children} {filesRecords} />
				</details>
			{:else}
				<span
					role="button"
					tabindex="0"
					on:keydown={() => onFileClick(file)}
					on:click={() => onFileClick(file)}
					class="file flex">{file.name}</span
				>
			{/if}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		padding-left: 20px;
	}

	li {
		margin: 5px 0;
	}

	.folder > summary {
		cursor: pointer;
		position: relative;
		padding-left: 30px;
		list-style: none;
	}

	/* Hide the default arrow */
	.folder > summary::-webkit-details-marker {
		display: none;
	}
	.folder > summary::marker {
		display: none;
	}

	.folder > summary::before {
		content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZvbGRlci1jbG9zZWQiPjxwYXRoIGQ9Ik0yMCAyMGEyIDIgMCAwIDAgMi0yVjhhMiAyIDAgMCAwLTItMmgtNy45YTIgMiAwIDAgMS0xLjY5LS45TDkuNiAzLjlBMiAyIDAgMCAwIDcuOTMgM0g0YTIgMiAwIDAgMC0yIDJ2MTNhMiAyIDAgMCAwIDIgMloiLz48cGF0aCBkPSJNMiAxMGgyMCIvPjwvc3ZnPg=='); /* Default folder icon */
		position: absolute;
		left: 0;
	}

	.folder[open] > summary::before {
		content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZvbGRlci1vcGVuIj48cGF0aCBkPSJtNiAxNCAxLjUtMi45QTIgMiAwIDAgMSA5LjI0IDEwSDIwYTIgMiAwIDAgMSAxLjk0IDIuNWwtMS41NCA2YTIgMiAwIDAgMS0xLjk1IDEuNUg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgxOGEyIDIgMCAwIDEgMiAydjIiLz48L3N2Zz4='); /* Open folder icon */
	}

	.file::before {
		content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZpbGUiPjxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN1oiLz48cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIvPjwvc3ZnPg=='); /* File icon */
		padding-right: 5px;
	}
</style>
