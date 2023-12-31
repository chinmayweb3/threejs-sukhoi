/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      orbitron: ["Orbitron", "sans-serif"],
      rajdhani: ["Rajdhani", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        offBlack: "#080808",
      },
      textColor: {
        offBlack: "#080808",
      },
    },
  },
  plugins: [],
};
