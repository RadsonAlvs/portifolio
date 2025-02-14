module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "skin-base": "var(--skin-color)",
      },
      fontFamily: {
        secondary: "var(--second-font)",
      },
    },
  },
  plugins: [],
};
