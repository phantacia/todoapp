/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        mono: ["Space Mono"],
      },
      colors: {
        text: "#040508",
        background: "#f3f4fa",
        primary: "#5468be",
        secondary: "#8c9bdb",
        accent: "#6e82d9",
      },
    },
  },
  plugins: [],
};
