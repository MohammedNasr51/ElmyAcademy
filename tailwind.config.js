/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purble": "#A239F0",
        "dark-purble": "#601596",
        "lighter-purble": "#D9ADF3",
        "light-purble": "#B96FEB",
        "custom-blue": "#637FEA",
        "custom-purble": "#845AED",
      },
      animation: {
        popup: "popup 1s ease-in-out infinite",
      },
      keyframes: {
        popup: {
          "0%, 100%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(0.9)" },
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
