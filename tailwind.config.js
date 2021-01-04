module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        'back-cos':'#000000',
        'darkblue-cos':'#14213d',
        'yellow-cos':'#fca311',
        'gray-cos':'#e5e5e5',
        'white-cos':'#ffffff',   
        'hover-icon':'#2C3E50'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
