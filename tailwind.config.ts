import type {Config} from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            coolest: {
                100: '#f0f0f0',
                200: '#e0e0e0',
                300: '#d0d0d0',
                400: '#c0c0c0',
                500: '#b0b0b0',
                600: '#a0a0a0',
                700: '#909090',
                800: '#808080',
                900: '#707070',
            }
        }
    },
    plugins: [],
}
