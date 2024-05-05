<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

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
			if (f.message === 'success') {
				toast.success("We've sent you an email to reset your password");
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<div class="flex items-center justify-center overflow-scroll p-6 md:p-10">
	<div class="w-full max-w-md space-y-6">
		<div class="space-y-2 text-center">
			<h1 class="text-3xl font-bold">Forgot your password?</h1>
			<p class="text-gray-500 dark:text-gray-400">
				We will send you an email to reset your password
			</p>
		</div>

		<form action="?/resetPassword" method="POST" use:enhance class="space-y-4">
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} placeholder="jdoe@me.com" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>

			<Form.Button class="w-full">Reset Password</Form.Button>
		</form>
	</div>
</div>
