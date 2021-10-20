module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        main: "var(--main)",
        keypad: "var(--keypad)",
        screen: "var(--screen)",
        'key-blue': "var(--key-blue)",
        'key-shadow-blue': "var(--key-shadow-blue)",
        'key-red': "var(--key-red)",
        'key-shadow-red': "var(--key-shadow-red)",
        key: "var(--key)",
        'key-shadow': "var(--key-shadow)",
        'text-keys': "var(--text-keys)",
        'text-display': "var(--text-display)"
      },
      colors: {
        main: "var(--main)",
        keypad: "var(--keypad)",
        screen: "var(--screen)",
        'key-blue': "var(--key-blue)",
        'key-shadow-blue': "var(--key-shadow-blue)",
        'key-red': "var(--key-red)",
        'key-shadow-red': "var(--key-shadow-red)",
        key: "var(--key)",
        'key-shadow': "var(--key-shadow)",
        'text-keys': "var(--text-keys)",
        'text-display': "var(--text-display)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ]
}
