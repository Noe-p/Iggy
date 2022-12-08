/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'iggy-green': '#3fba2d',
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
