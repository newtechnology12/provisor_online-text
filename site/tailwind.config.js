module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "arial"],
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "940px" },
        sm: { max: "640px" },
      },
      colors: {
        primary: "#FF9F00",
        primaryLight: "#2a7857",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
