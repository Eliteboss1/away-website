/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      'hero': "url('src/assets/Rectangle 3.svg')",
    },
    colors: {
      orange: "#FFAC4A",
      white: "#FFF",
      black: "#000000"
    },
  },
  plugins: [],
};
