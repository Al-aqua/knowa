import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { formSchema } from "./schema";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    resetPassword: async (event) => {
        const form = await superValidate(event, zod(formSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        try {
            await event.locals.pb
                .collection("users")
                .requestPasswordReset(form.data.email);
            message(form, "Check your email for a password reset link");

        } catch (err) {
            console.log(err);
            message(form, "Something went wrong")
            return fail(500, {
                form,
            });
        }
        throw redirect(302, "/login");
    },
};
