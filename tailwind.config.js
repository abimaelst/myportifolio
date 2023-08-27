/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        'blue-chill': {
          50: '#edfdfe',
          100: '#d1f7fc',
          200: '#aaedf7',
          300: '#6fdef1',
          400: '#2dc6e3',
          500: '#11a9c9',
          600: '#1188aa',
          700: '#156d89',
          800: '#1a5970',
          900: '#1a4a5f',
          950: '#0b3041'
        }
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')"
      }
    }
  },
  plugins: []
}
