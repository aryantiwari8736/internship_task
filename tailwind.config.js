/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cover: "Covered By Your Grace",
        poppins: "Poppins",
        manrope: "Manrope",
      },
    },
    colors: {
      bg_black: "#1C1C1C",
      white: "#FFFFFF",
      light_green: "#2DA950",
      light_grey: "#E8EEE7",
      dark_grey: "#9E9D9D",
      grey: "#EFEFEF",
      normal_grey: "#F5F5F5",
      mygrey:"#9E9D9D",
      black_hover_color:"#4E4E4E"
    },
  },
  plugins: [],
};
