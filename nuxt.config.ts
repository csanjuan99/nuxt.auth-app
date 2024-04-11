// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL,
        },
    },

    modules: ['@nuxt/ui'],
})
