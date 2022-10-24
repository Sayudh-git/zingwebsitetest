/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zing: {
          orange: "#FE834F",
          black: "#1C1C1C",
          offWhite: "#FFF4EA",
          green: "#15BE77",
        },
      },
    },
  },
  plugins: [],
};
