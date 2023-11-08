/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      Orange: {
        100: "#9F241D",
        200: "#D34A2D",
        300: "#EB7A57",
        400: "#ECBD9E",
        500: "#fff6f2",
      },
      Yellow: {
        100: "#ED9744",
      },
    },
  },
  plugins: [],
};
