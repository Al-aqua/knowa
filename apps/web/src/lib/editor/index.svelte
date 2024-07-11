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
	import { fileContent } from '../file-store';

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
			content: $fileContent,
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
		// Subscribe to the fileContent store
		unsubscribe = fileContent.subscribe((value) => {
			if (editor && value !== editor.getHTML()) {
				editor.commands.setContent(value, false);
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

<!-- <style> -->
<!-- 	:global(.ProseMirror p.is-empty::before) { -->
<!-- 		content: "Type '/' for commands"; -->
<!-- 		color: #adb5bd; -->
<!-- 		float: left; -->
<!-- 		height: 0; -->
<!-- 	} -->
<!-- 	:global(p) { -->
<!-- 		line-height: 0; -->
<!-- 	} -->
<!-- 	:global(h1, h2, h3, h4, h5, h6) { -->
<!-- 		margin-bottom: 0.5rem; -->
<!-- 	} -->
<!-- </style> -->
<style>
	:global(h1, h2, h3, h4, h5, h6, p, ul, li) {
		width: 100%;
	}

	:global(ul, ol) {
		margin: 0px !important;
	}

	:global(.ProseMirror) {
		position: static !important;
	}
	:global(.ProseMirror p.is-empty::before) {
		content: "Type '/' for commands";
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.loading) {
		animation: fadeIn 0.15s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	:global(.ProseMirror h1.is-empty::before) {
		content: 'Heading 1';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h2.is-empty::before) {
		content: 'Heading 2';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h3.is-empty::before) {
		content: 'Heading 3';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h4.is-empty::before) {
		content: 'Heading 4';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h5.is-empty::before) {
		content: 'Heading 5';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror h6.is-empty::before) {
		content: 'Heading 6';
		color: #adb5bd;
		float: left;
		height: 0;
	}
	:global(.ProseMirror p) {
		margin-top: 0px;
	}
	:global(ul[data-type='taskList']) {
		list-style: none;
		padding-left: 2px;
	}
	:global(ul[data-type='taskList'] li) {
		display: flex;
		align-items: top;
	}
	:global(ul[data-type='taskList'] li label) {
		padding-right: 12px;
	}
	:global(ul, ol) {
		margin-top: 0px !important;
	}
	:global(li p, li p) {
		margin-top: 0px !important;
		margin-bottom: 4px !important;
	}

	:global(ul[data-type='taskList'] li label input) {
		border-radius: 0.25rem;
		border-color: #cbd5e1;
	}
	:global(.max-width-content) {
		max-width: var(--content-width);
	}
	:global(ul[data-type='taskList'] li div) {
		margin-bottom: 0;
	}

	:global(span.collaboration-cursor__caret.ProseMirror-widget) {
		position: relative;
		border: 1px solid;
	}

	:global(.collaboration-cursor__label) {
		position: absolute;
		top: -20px;
		left: -1px;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		padding: 0px 7px;
		width: 126px;
	}
</style>
