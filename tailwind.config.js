module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          main: "var(--main)",
          keypad: "var(--keypad)",
          screen: "var(--screen)",
          'key-blue': "var(--key-blue)",
          'key-shadow-blue': "var(--key-shadow-blue)",
          'key-red': "var(--key-red)",
          'key-shadow-red': "var(--key-shadow-red)",
          key: "var(--key)",
          'key-shadow': "var(--key-shadow)",
          'text-dark': "var(--text-dark)",
          'text-white': "var(--text-white)",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}
