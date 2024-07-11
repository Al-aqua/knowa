import { writable } from 'svelte/store';

export const fileContent = writable(
    '<h1>Chapter 1: Introduction </h1> \
		<h2>An Overview</h2>\
		<p>The first chapter of this  dissertation provides a comprehensive introduction </p>  \
		<p>to the research project, setting the stage for the exploration of a cutting-edge </p>  \
		<p> knowledge base management system enhanced by an artificial intelligence  </p>  \
		<p>(AI) assistant. </p>  '
);
