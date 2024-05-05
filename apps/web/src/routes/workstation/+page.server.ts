import { handleLoginRedirect } from "$lib/utils";
import { redirect, type RequestEvent } from "@sveltejs/kit";

export const load = async (event: RequestEvent) => {
    console.log(event)
    if (!event.locals.user) {
        throw redirect(303, handleLoginRedirect(event))
    }
}
