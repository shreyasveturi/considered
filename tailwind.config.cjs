/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F4EC',
        surface: '#FFFDF8',
        text: '#2F2924',
        muted: '#7A6F66',
        border: '#E8DDCF',
        taupe: '#B8A99A',
        sage: '#A8B5A0',
        dusty: '#D8B7A6'
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
}
