/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iggy-green': '#0D9962',
        'iggy-yellow': '#fbb03b',
        'iggy-brown': '#F0CC93',
      },
      backgroundImage: (theme) => ({
        'pets-pattern': "url('/public/assets/pattern.svg')",
      }),
      fontFamily: {
        dosis: ['Dosis'],
      },
    },
  },
  plugins: [],
};
