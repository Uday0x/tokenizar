/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- important for toggle //not to forget
  theme: {
    extend: {
      colors: {
        accent: '#ff9100',
        panel: '#0b0b0c',
      },
    },
  },
  plugins: [],
};