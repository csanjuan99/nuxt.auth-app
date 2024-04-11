import type {Ref} from "vue";

export default defineNuxtRouteMiddleware((to) => {
    const auth = useAuth();
    const config = useAppConfig();
    const loggedIn: Ref<boolean> = auth.loggedIn;
    if (to.meta.auth === false) {
        return;
    }
    if (to.meta.auth === 'guest' && loggedIn.value) {
        // If the user is already logged in, redirect to the home page
        // ...
        return navigateTo(config.auth.redirect.root ?? '/');
    }
    if (to.meta.auth && !loggedIn.value && (to.path !== config.auth.redirect.login && to.path !== config.auth.redirect.register)) {
        // If the user is not logged in, redirect to the login page
        // ...
        return navigateTo('/login');
    }
})
