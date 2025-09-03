 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#030607',
        'primary-33': '#03060733',
        'primary-99': '#03060799',
        white: '#ffffff',
        'white-99': '#ffffff99',
        light: '#f5f5f5'
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}