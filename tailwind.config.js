/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      colors: {
        primary: "#579ACF",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
