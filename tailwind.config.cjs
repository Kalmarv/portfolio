/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'branding-primary': '#ff8f88',
        'branding-dark': '#121212',
      },
    },
    plugins: [],
  },
}
