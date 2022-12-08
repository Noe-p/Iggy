/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iggy-green': '#0D9962',
        'iggy-yellow': '#fbb03b',
      },
      fontFamily: {
        'gilroy' : ['Gilroy','sans-serif']
      },
    },
  },
  plugins: [],
};
