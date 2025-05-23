/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
      colors: {
        ink: "#101828",
        "ink-muted": "#8D95A7",
        primary: "#55BBF0",
        white: "#ffffff",
        "border-default": "#BD95A7",
        "border-card": "#EAECF0",
        "border-icon": "#1D2939",
      },
      fontSize: {
        "title-xl": ["20px", { lineHeight: "28px" }],
        "title-m": ["16px", { lineHeight: "24px" }],
        "body-m": ["14px", { lineHeight: "21px" }],
        "body-placeholder": ["14px", { lineHeight: "20px" }],
      },
      borderRadius: {
        xl: "20px",
        "radius-l": "16px",
        pill: "96px",
      },
      spacing: {
        xs: "4px",
        l: "12px",
        "3xl": "20px",
      },
      borderWidth: {
        DEFAULT: "1px",
        icon: "1.25px",
      },
      boxShadow: {
        card: "0px 2px 14px rgba(29, 41, 57, 0.03)",
      },
    },
  },
  plugins: [],
};
