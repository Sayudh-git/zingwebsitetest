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
          black: "#2C2A2A",
          offWhite: "#FFF4EA",
          green: "#15BE77",
        },
      },
    },
  },
  plugins: [],
};
