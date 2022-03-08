const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'ss': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
