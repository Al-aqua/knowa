<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import Settings from 'lucide-svelte/icons/settings';
	import { Button } from '$lib/components/ui/button';
	import FileTree from '$lib/file-tree.svelte';

	export let avatar;
	export let fallbackAvatar = 'Know';
	export let username;
	export let filesRecords;

	const files = [
		{
			name: 'Chapter 1',
			type: 'folder',
			children: [
				{ name: 'Introduction', type: 'file' },
				{ name: 'Background', type: 'file' },
				{ name: 'Problem Statement', type: 'file' },
				{ name: 'Scope', type: 'file' },
				{ name: 'Significance of the Study', type: 'file' },
				{ name: 'Research Questions', type: 'file' },
				{ name: 'Methodology', type: 'file' },
				{ name: 'Dissertation Structure', type: 'file' }
			]
		},
		{
			name: 'Chapter 2',
			type: 'folder',
			children: [
				{ name: 'Introduction to Knowledge Management', type: 'file' },
				{ name: 'Role of AI in Knowledge Management', type: 'file' },
				{ name: 'Knowledge Base Systems', type: 'file' },
				{ name: 'Natural Language Processing (NLP) in AI', type: 'file' },
				{ name: 'Existing AI-Assisted Knowledge Management Systems', type: 'file' },
				{ name: 'Gaps in the Existing Literature', type: 'file' },
				{ name: 'Conceptual Framework', type: 'file' },
				{ name: 'Summary', type: 'file' }
			]
		},
		{
			name: 'Chapter 3',
			type: 'folder',
			children: [
				{
					name: 'System Development',
					type: 'folder',
					children: [
						{ name: 'Requirement Analysis', type: 'file' },
						{ name: 'Implementation', type: 'file' }
					]
				},
				{
					name: 'User Evaluation',
					type: 'file'
				},
				{
					name: 'Performance Evaluation',
					type: 'file'
				},
				{
					name: 'Continuous Improvement Framework',
					type: 'file'
				},
				{
					name: 'Data Analysis',
					type: 'file'
				},
				{
					name: 'Ethical Considerations',
					type: 'file'
				}
			]
		},
		{
			name: 'Chapter 4',
			type: 'folder',
			children: [
				{ name: 'Requirement Analysis', type: 'file' },
				{ name: 'System Design and Architecture', type: 'file' },
				{ name: 'Implementation', type: 'file' }
			]
		},
		{
			name: 'Chapter 5',
			type: 'folder',
			children: [
				{ name: 'Usability Testing', type: 'file' },
				{ name: 'User Satisfaction Surveys', type: 'file' }
			]
		},
		{
			name: 'Chapter 6',
			type: 'folder',
			children: [
				{ name: 'Information Retrieval Testing', type: 'file' },
				{ name: 'Scalability Assessment', type: 'file' }
			]
		},
		{
			name: 'Chapter 7',
			type: 'folder',
			children: [
				{ name: 'Feedback Mechanism', type: 'file' },
				{ name: 'Iterative Development', type: 'file' }
			]
		},
		{
			name: 'Chapter 8',
			type: 'folder',
			children: [
				{ name: 'Qualitative Analysis', type: 'file' },
				{ name: 'Quantitative Analysis', type: 'file' }
			]
		},
		{
			name: 'Chapter 9',
			type: 'folder',
			children: [
				{ name: 'Summary of Findings', type: 'file' },
				{ name: 'Contributions to Knowledge', type: 'file' },
				{ name: 'Implications and Applications', type: 'file' },
				{ name: 'Limitations', type: 'file' },
				{ name: 'Future Work', type: 'file' },
				{ name: 'Final Remarks', type: 'file' }
			]
		}
	];
</script>

<div class="h-screen border-b border-r border-primary">
	<header class="flex h-16 items-center border-b border-primary px-4">
		<Avatar.Root>
			<!-- TODO: Link with the backend   -->
			<Avatar.Image src={avatar} alt="@shadcn" />
			<Avatar.Fallback>{fallbackAvatar}</Avatar.Fallback>
		</Avatar.Root>
		<p class="ml-2 font-bold">{username}</p>
		<Button href="/settings" variant="ghost" class="ml-auto" size="icon"><Settings /></Button>
	</header>
	<FileTree {files} {filesRecords} />
</div>
