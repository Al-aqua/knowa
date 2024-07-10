import { handleLoginRedirect } from '$lib/utils';
import { redirect, type RequestEvent } from '@sveltejs/kit';

export const load = async (event: RequestEvent) => {
    console.log(event);
    if (!event.locals.user) {
        throw redirect(303, handleLoginRedirect(event));
    }

    try {
        return {
            files: await files(event)
        };
    } catch (error) {
        console.error('Error fetching files:', error);
    }
};

const files = async (event: RequestEvent) => {
    try {
        console.log('Fetching files...');
        const records = await event.locals.pb.collection('files').getFullList({
            sort: '-created'
        });

        console.log('Records fetched:', records);

        if (records) {
            records.forEach((record) => {
                try {
                    record.data = JSON.parse(record.data);
                    console.log('Record data parsed:', record.data);
                } catch (error) {
                    console.error('Error parsing record data:', error, 'Record:', record);
                }
            });
            return records;
        } else {
            console.log('No records found.');
            return [];
        }
    } catch (error) {
        console.error('Error fetching files:', error);
        throw error;
    }
};
