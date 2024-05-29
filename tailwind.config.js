/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["*/*.html"],
  theme: {
    colors:{
      white: '#ffffff',
      black: '#000000',
      primary: '#003863',
      secondary:'#35b4ff',
      gray: '#282828',
      accens_font: '#003963',
      light_blue: '#80b1c8',
      skin_like: '#f6f1ed',
    },
    fontFamily:{
      display:['Poppins','sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

