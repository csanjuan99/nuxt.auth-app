export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuth();

    if (to.meta.auth === true && !!auth.authorization.value) {
        await auth.me();
    }

    if (to.meta.auth === 'guest' && !!auth.authorization.value) {
        await auth.me();
    }
});
