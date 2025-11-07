/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                judicial: {
                    primary: '#1e40af',
                    secondary: '#3b82f6',
                    dark: '#1e3a8a',
                    light: '#60a5fa',
                    accent: '#0369a1',
                }
            }
        },
    },
    plugins: [],
}
