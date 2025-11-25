/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Mono"', "monospace"],
        display: ['"Georama"', "sans-serif"],
      },
      colors: {
        brand: "#ccff00",
      },
    },
  },
  plugins: [],
};
