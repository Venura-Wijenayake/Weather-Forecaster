/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-grey': '#343541', // Define your custom background color class
      },
    },
  },
  variants: {},
  plugins: [],
}

