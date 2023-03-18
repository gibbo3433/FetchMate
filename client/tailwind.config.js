// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
  },
  variants: {},
  plugins: [],
};
