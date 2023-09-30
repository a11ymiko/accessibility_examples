/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["*.html"],
  theme: {
    colors:{
      white: '#ffffff',
      black: '#000000',
      primary: '#003863',
      secondary:'#35b4ff',
    },
    fontFamily:{
      display:['Poppins','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

