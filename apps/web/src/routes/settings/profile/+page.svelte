<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { PencilIcon } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { getImageUrl } from '$lib/utils';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, enhance } from '$app/forms';

	export let data;

	let loading: boolean;
	$: loading = false;

	const showPrevew = (event) => {
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview') as HTMLImageElement;
			preview.src = src;
		}
	};

	const submitUpdateProfile = () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="flex h-full w-full flex-col gap-4 p-16">
	<h2 class="text-3xl font-medium">Update Profile</h2>
	<form
		use:enhance={submitUpdateProfile}
		method="POST"
		class="flex flex-col gap-4"
		action="?/updateProfile"
		enctype="multipart/form-data"
	>
		<label for="avatar">
			Profile Picture
			<Avatar.Root class="h-32 w-32  overflow-visible hover:cursor-pointer">
				<Avatar.Image
					class="rounded-full"
					src={data?.user?.avatar
						? getImageUrl(data.user?.collectionId, data.user?.id, data.user?.avatar)
						: `https://ui-avatars.com/api/?name=${data?.user?.name}`}
					alt="user avatar"
					id="avatar-preview"
				/>
				<Avatar.Fallback>{data.user?.name}</Avatar.Fallback>
				<label for="avatar" class="absolute -bottom-0 -right-0">
					<span
						class="absolute -bottom-0.5 -right-0.5 rounded-full bg-primary p-2 text-primary-foreground hover:cursor-pointer"
					>
						<PencilIcon />
					</span>
				</label>
			</Avatar.Root>
			<input
				type="file"
				id="avatar"
				name="avatar"
				accept="image/*"
				value=""
				hidden
				on:change={showPrevew}
				disabled={loading}
			/>
		</label>

		<div class="grid w-1/3 items-center gap-1.5">
			<label for="name">Name</label>
			<Input
				class="w-full"
				id="name"
				name="name"
				placeholder="Your username"
				type="text"
				value={data?.user?.name}
				disabled={loading}
			/>
		</div>
		<Button type="submit" class="w-1/3" disabled={loading}>Update</Button>
	</form>
</div>
