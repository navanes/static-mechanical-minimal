/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red:      '#DF231E',
          'red-lt': '#E74D49',
          'red-dk': '#BB1D19',
          navy:     '#04326F',
          blue:     '#053F8D',
          'blue-lt':'#0759C8',
        },
      },
      fontFamily: {
        sans:    ['Roboto', 'system-ui', 'Arial', 'sans-serif'],
        display: ['"Roboto Condensed"', 'Impact', '"Arial Narrow"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay': "linear-gradient(rgba(10,20,45,0.78), rgba(10,20,45,0.55))",
      },
    },
  },
  plugins: [],
}
