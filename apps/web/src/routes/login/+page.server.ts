import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";
import type { ClientResponseError } from "pocketbase";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    login: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        try {
            await event.locals.pb.collection("users").authWithPassword(
                form.data.email,
                form.data.password
            )
            if (!event.locals.pb.authStore.model.verified) {
                event.locals.pb.authStore.clear()
                message(form, "Please verify your email address")
                return fail(400, {
                    form,
                })
            }

        } catch (err) {
            const e = err as ClientResponseError
            if (e.data.message == 'Failed to authenticate.') {
                message(form, "Wrong email or password")
                return fail(400, {
                    form,
                })
            }
            message(form, "Something went wrong")
            return fail(500, {
                form,
            });
        }
        const redirectTo = event.url.searchParams.get("redirectTo")
        if (redirectTo) {
            throw redirect(302, `/${redirectTo.slice(1)}`)
        }
        throw redirect(302, "/workstation");
    },
};
