/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iggy-green': '#3fba2d',
        'iggy-yellow': '#fbb03b',
      },
      fontFamily: {
        'gilroy' : ['Gilroy','sans-serif']
      },
    },
  },
  plugins: [],
};
