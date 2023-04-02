/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height : {
        'fscreen': '100vh'
      },
      width : {
        'desktop': '800px'
      },
      screens: {
        'desktop':'800px',
        'mobile': '600px',
        'small-h': { 'raw': '(max-height: 700px)' },
      }
    },
  },
  plugins: [],
}
