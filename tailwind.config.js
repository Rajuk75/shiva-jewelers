/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FDE68A', // Amber 200
          DEFAULT: '#D97706', // Amber 600
          dark: '#92400E', // Amber 800
        },
        secondary: {
          light: '#FCA5A5', // Red 300
          DEFAULT: '#DC2626', // Red 600
          dark: '#7F1D1D', // Red 900
        },
        dark: {
          DEFAULT: '#111827', // Gray 900
          light: '#1F2937', // Gray 800
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
