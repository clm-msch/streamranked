/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "bg-gradient-to-r from-cyan-500 to-blue-500",
        light: "#E6E7FF",
        secondary: "#00011A",
        blue: "#000AFF",
        violet: "#A81AFF",
      },
    },
  },
  plugins: [],
};
