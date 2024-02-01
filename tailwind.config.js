/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark': '#151515',
      'neutral': '#4E4D4B',
      'accent': '#D5966B',
      'white': '#ffffff'
    },
    extend: {
      keyframes: {
        bg: {
          'from': { transform: 'translateY(-110vh)' },
          'to': { transform: 'translateY(0)' },
        }
      },
      animation: {
        showBackground: 'bg 1s ease-in-out',
      }
    }
  },
  plugins: [],
}
