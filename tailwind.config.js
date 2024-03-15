/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "fira-sans": ["Fira Sans", "sans-serif"],
      Lexend: ["Lexend", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#0BE58A",
        dark: "#150B2B",
        "dark-70": "#150B2BB3",
        "dark-80": "#282828CC",
        "dark-60": "#150B2B99",
        "dark-5": "#150B2B0D",
        dark2: "#282828",
        "dark-06": "#878787",
      },
    },
  },
  plugins: [],
};
