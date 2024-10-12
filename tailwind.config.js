/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem', 
        'xxxs': '0.4rem',
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}