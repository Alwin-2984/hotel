/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 4mm 0.75rem rgba(0, 0, 0, 0.69)',
      },
      colors: {
        'background': '#fffff',
      },
    },
  },
  plugins: [],
}

