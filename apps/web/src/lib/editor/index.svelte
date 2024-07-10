<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import suggestion from './extensions/suggestion';
	import Slash from './extensions/slash-command';
	import Placeholder from '@tiptap/extension-placeholder';
	import Collaboration from '@tiptap/extension-collaboration';
	import * as Y from 'yjs';
	import { WebrtcProvider } from 'y-webrtc';

	export let content;

	let ydoc = new Y.Doc();
	let element: HTMLElement;
	let editor: Editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Slash.configure({
					suggestion
				}),
				Placeholder
				// Collaboration.configure({
				// 	document: ydoc,
				// 	onFirstRender: () => new WebrtcProvider('my-document', ydoc)
				// })
			],
			content: content,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			editorProps: {
				attributes: {
					class:
						'pt-24 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl prose-gray mx-auto focus:outline-none'
				}
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div bind:this={element} />

<style>
	:global(.ProseMirror p.is-empty::before) {
		content: "Type '/' for commands";
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(p) {
		line-height: 0;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		margin-bottom: 0.5rem;
	}
</style>
