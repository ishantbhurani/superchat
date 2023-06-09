/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#d8e6fd',
          200: '#b1cdfb',
          300: '#89b4fa',
          400: '#629bf8',
          500: '#3b82f6',
          600: '#2f68c5',
          700: '#234e94',
          800: '#183462',
          900: '#0c1a31',
        },
      },
    },
  },
  plugins: [],
}
