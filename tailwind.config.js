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
          red:      '#e63232',
          'red-lt': '#ef5353',
          'red-dk': '#BB1D19',
          blue:     '#2f63d8',
          'blue-lt':'#3b73ec',
        },
        // Industrial-noir dark theme
        ink:      '#05080d',
        surface:  '#0b1017',
        line:     'rgba(255,255,255,0.16)',
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
