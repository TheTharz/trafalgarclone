/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        textcolor :'#1F1534',
        secondary : '#7D7987',
        button : '#458FF6',
      },
      fontFamily:{
        muli : 'Mulish',
      }
    },
  },
  plugins: [],
}

