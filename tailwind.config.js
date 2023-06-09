/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm:'640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
}