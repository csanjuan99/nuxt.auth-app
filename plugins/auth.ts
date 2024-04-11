export default defineNuxtPlugin((): void => {
    addRouteMiddleware('sync', (to): void => {
        to.meta.auth = true;
    })
});
