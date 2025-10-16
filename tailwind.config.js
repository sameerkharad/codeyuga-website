/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        caprasimo: ['"Caprasimo"', 'cursive'],
      },
    },
  },
  plugins: [],
}
