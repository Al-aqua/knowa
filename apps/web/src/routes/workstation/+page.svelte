<script lang="ts">
	import Editor from '$lib/editor/index.svelte';
	import Bar from '$lib/editor/bar.svelte';

	let title = 'Workstation';
</script>

<Bar {title} />
<Editor />
