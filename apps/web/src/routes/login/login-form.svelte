<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';
	import { page } from '$app/stores';
	import ExclamationTriangle from 'svelte-radix/ExclamationTriangle.svelte';
	import * as Alert from '$lib/components/ui/alert/index.js';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json',
		onUpdated: ({ form: f }) => {
			if (!f.valid) {
				toast.error('Form is invalid!');
			}
			if (f.message) {
				toast.error(f.message);
			}
		}
	});

	const { form: formData, enhance } = form;

	let message: string;
	$: message = $page.url.searchParams.get('message') ?? '';
</script>

<div class="flex items-center justify-center overflow-scroll p-6 md:p-10">
	<div class="w-full max-w-md space-y-6">
		{#if message}
			<Alert.Root variant="destructive" class="m-auto max-h-fit max-w-fit">
				<ExclamationTriangle class="h-4 w-4" />
				<Alert.Title>Error</Alert.Title>
				<Alert.Description>{message}</Alert.Description>
			</Alert.Root>{/if}
		<div class="space-y-2 text-center">
			<h1 class="text-3xl font-bold">Welcome back</h1>
			<p class="text-gray-500 dark:text-gray-400">
				Don't have an account yet?{' '}
				<a class="underline" href="/register"> Sign up </a>
			</p>
		</div>

		<form action="?/login" method="POST" use:enhance class="space-y-4">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="jdoe@me.com" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<Input {...attrs} bind:value={$formData.password} type="password" />
				</Form.Control>
				<Form.FieldErrors />
				<a
					href="/reset-password"
					class="group block w-fit text-sm text-gray-500 transition duration-300"
					>Forgot your password?
					<span
						class="block h-0.5 max-w-0 bg-gray-500 transition-all duration-500 group-hover:max-w-full"
					></span>
				</a>
			</Form.Field>
			<!--animate the hover underline-->

			<Form.Button class="w-full">Login</Form.Button>
		</form>
	</div>
</div>
