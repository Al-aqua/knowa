<script>
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { enhance } from '$app/forms';

	let ansswer = '';

	const getAnswer = () => {
		return async ({ result }) => {
			if (result.type === 'success') {
				console.log('ansswer', result.data);
				ansswer = result.data.response;
			}
		};
	};
</script>

<div class="flex flex-col gap-4">
	<h3>Hi i'm Knowa you can ask me anything!</h3>
	<form action="?/askAi" method="post" class="flex flex-col gap-4" use:enhance={getAnswer}>
		<Input id="question" name="question" type="text" placeholder="Ask me anything"></Input>
		<Button type="submit" class="">Ask</Button>
	</form>
	<span>{ansswer}</span>
</div>
