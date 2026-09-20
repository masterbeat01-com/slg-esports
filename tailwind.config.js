/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { slg: { dark: "#080808", card: "#111111" } }
    },
  },
  plugins: [],
}
