import { handleLoginRedirect } from '$lib/utils';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types.js';
import ollama from 'ollama';

export const load: PageServerLoad = async (event: RequestEvent) => {
    // console.log(event);
    if (!event.locals.user) {
        throw redirect(303, handleLoginRedirect(event));
    }

    try {
        const records = await event.locals.pb.collection('files').getFullList({});
        if (records)
            return {
                filesRecords: records
            };
    } catch (error) {
        console.log(error);
    }
};

export const actions: Actions = {
    askAi: async ({ request, locals }) => {
        const data = await request.formData();
        let rules =
            'You are a knowledge base management system called knowa you have the following knowledge';
        const records = await locals.pb.collection('files').getFullList({});
        records.forEach((record) => {
            rules += `\n${record.name}: ${record.file}`;
        });
        rules += 'Answer the question:';
        rules += data.get('question') as string;
        const response = await ollama.chat({
            model: 'llama3',
            messages: [{ role: 'user', content: rules }]
        });
        console.log(response.message.content);

        return {
            success: true,
            response: response.message.content
        };
    }
};
