import { error } from '@sveltejs/kit';
import type { Actions } from './$types.js';

//TODO: add validation
export const actions: Actions = {
    updateProfile: async ({ request, locals }) => {
        const data = await request.formData();
        const userAvatar = data.get('avatar') as File;

        if (userAvatar.size === 0) {
            data.delete('avatar');
        }

        try {
            const { name, avatar } = await locals.pb.collection('users').update(locals.user?.id, data);

            locals.user = {
                ...locals.user,
                name,
                avatar
            };
        } catch (err) {
            //TODO: handle error
            console.log(err);
            throw error(400, 'Something went wrong');
        }
        return { success: true };
    }
};
