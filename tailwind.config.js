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
          blue:     '#3B6FF6',
          'blue-lt':'#5A8AFF',
        },
        // Industrial-noir dark theme
        ink:      '#0B0E14',
        surface:  '#12161F',
        line:     'rgba(255,255,255,0.09)',
        // Light theme (contact page)
        paper:    '#EEF1F4',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
