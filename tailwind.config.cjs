module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
