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
        first: "var(--first-font)",
      },
      spacing: {
        "1": "0.25rem",
        "4": "0.9375rem",
        "5": "1.25rem",
        "16": "3.75rem",
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
      animation: {
        pulse: "lightMove 2s ease-in-out infinite",
      },
      keyframes: {
        lightMove: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      fontSize: {
        "4xl": "2.5rem",
      },
      padding: {
        "3": "0.75rem",
        "[35px]": "2.1875rem",
      },
      borderRadius: {
        full: "2.5rem",
      },
    },
  },
  plugins: [],
};
