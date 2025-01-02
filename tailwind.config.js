/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
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
        }
      },
      animation: {
        'fadein': 'fade-in 2s',
        'fade-color': 'fade-color 10s forwards',
      },
    },
    colors: {
      'midnight-blue': '#07132D',
      'light-aqua': '#c6fcf7',
      'vibrant-red': '#f44336',
    },
    
  },
  plugins: [],
}

