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
        'background': '#363841',
        'text': '#E38035',
        'div': 'rgb(83 91 98 / 49%)',
      },
    },
  },
  plugins: [],
}

