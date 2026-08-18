/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vitela: {
          50: '#F7F3E9',
          100: '#EFE7D2',
          200: '#E3D5B0',
        },
        tinta: {
          700: '#2B2A3D',
          800: '#201F30',
          900: '#151420',
        },
        bronze: {
          400: '#C99A4A',
          500: '#B0812F',
          600: '#8F6522',
        },
        patina: {
          400: '#6F8E7C',
          500: '#546E5F',
        },
        brasa: {
          500: '#A8422E',
        },
      },
      fontFamily: {
        display: ['"Spectral"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        seal: '0 2px 10px rgba(21, 20, 32, 0.25)',
      },
      clipPath: {
        shield: 'polygon(50% 0%, 100% 20%, 100% 55%, 50% 100%, 0% 55%, 0% 20%)',
      },
    },
  },
  plugins: [],
}
