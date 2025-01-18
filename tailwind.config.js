/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0A192F",
        designColor: "#90d5ff",
        lightText: "#ccd6f6",
        darkText: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
        textBg: "#112240",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

//#90d5ff
