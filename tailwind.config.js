/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        dMSansBold: "DMSans-Bold",
        dMSansBoldItalic: "DMSans-BoldItalic",
        dMSansItalic: "DMSans-Italic",
        dMSansMedium: "DMSans-Medium",
        dMSansMediumItalic: "DMSans-MediumItalic",
        dMSans: "DMSans-Regular",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
