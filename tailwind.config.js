/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        text: "Montserrat-Regular",
        title: "Montserrat-Bold",
        alt: "Montserrat-Medium",
      },
      colors: {
        "color-primary": "#4F3D56",
      },
    },
  },
  plugins: [],
};
