/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      accent: '#BC1E4A',
      dark: '#16181A',
      gray: '#22262C',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
    },
    // colors: {
    //   white: '#ffffff',
    //   accent: '#BC1E4A',
    //   dark: '#16181A',
    //   gray: '#22262C',
    // },
  },
  plugins: [],
};
