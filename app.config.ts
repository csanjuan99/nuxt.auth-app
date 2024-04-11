export default defineAppConfig({
    ui: {
        primary: 'green',
        notifications: {
            position: 'top-0 bottom-auto',
        }
    },
    auth: {
        redirect: {
            login: '/login',
            register: '/register',
            root: '/',
        }
    }
});
