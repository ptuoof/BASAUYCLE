/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1ABC9C',
                'primary-hover': '#16A085',
                'primary-light': '#E8F8F5',
            },
        },
    },
    plugins: [],
}
