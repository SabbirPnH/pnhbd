
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'it': "url('/it_bg.jpg')",
        'overseas': "url('/overseas.jpg')",
        'study':"url('/study.jpg')",
        'shop':"url('/shop.jpg')",
      },
      fontFamily: {
        'eng': [' Poppins'],    
    },
      
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),],
}