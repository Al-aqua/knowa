<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-3xl">Hello World!</h1>

<form action="/logout" method="post">
	<Button type="submit">Logout</Button>
</form>
