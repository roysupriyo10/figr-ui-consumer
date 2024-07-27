/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        gray: {
          1000: "#090909",
        },
        orange: {
          700: "#FD9800",
        },
      },
    },
  },
  plugins: [],
};
