/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {opacity: '0'},
          '100%': {opacity: '100'},
        },
        'fade-color': {
          '0%': {opacity: '0'},
          '100%': {opacity: '100', color:'#f44336',},
        },
        'levitation-one':{
          '0%': {transform: 'translateY(10px)'},
          '50%': {transform: 'translateY(-10px)'},
          '100%': {transform: 'translateY(10px)'},
        },
        'levitation-two':{
          '0%': {transform: 'translate(-3rem, -10px)'},
          '50%': {transform: 'translate(-3rem, 10px)'},
          '100%': {transform: 'translate(-3rem, -10px)'}
        },
      },

      animation: {
        'fadein': 'fade-in 2s',
        'fade-color': 'fade-color 10s forwards',
        'levitation-one': 'levitation-one 5s  infinite',
        'levitation-two': 'levitation-two 5s infinite',
      },

      colors: {
        'midnight-blue': '#07132D',
        'light-aqua': '#c6fcf7',
        'vibrant-red': '#f44336',
      }
    },

  },
  plugins: [],
};