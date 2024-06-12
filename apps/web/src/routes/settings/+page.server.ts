import { handleLoginRedirect } from '$lib/utils';
import { redirect, type RequestEvent } from '@sveltejs/kit';

export const load = async (event: RequestEvent) => {
    if (!event.locals.pb.authStore.isValid) {
        throw redirect(303, handleLoginRedirect(event));
    } else {
        redirect(303, '/settings/profile');
    }
};
