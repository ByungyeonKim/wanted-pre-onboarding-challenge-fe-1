/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-image': 'fade-in 550ms ease-out 300ms forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
