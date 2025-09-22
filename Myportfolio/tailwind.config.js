/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2a2752",
        secondary: "#383562",
        accent: "#e7005e",
      },
    },
  },
  plugins: [],
}
