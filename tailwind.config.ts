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
      spacing: {
        "5": "1.25rem",
      },
      borderWidth: {
        "5": "5px",
      },
      tracking: {
        widest: "5px",
      },
      screens: {
        lg: { max: "1200px" },
        md: { max: "426px" },
      },
      width: {
        "270": "270px",
      },
      zIndex: {
        "40": "40",
        "50": "50",
      },
    },
  },
  plugins: [],
};
