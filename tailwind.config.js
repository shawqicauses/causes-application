// DONE REVIEWING: GITHUB COMMIT 💫
/** @type {import('tailwindcss').Config} */
const f = require("@tailwindcss/forms")
const lc = require("@tailwindcss/line-clamp")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xs": "30rem",
      "sm": "10rem",
      "md": "48rem",
      "lg": "64rem",
      "xl": "80rem",
      "xl-2": "96rem"
    },
    maxWidth: {
      "0": "0rem",
      "none": "none",
      "xs": "20rem",
      "sm": "24rem",
      "md": "28rem",
      "lg": "32rem",
      "xl": "36rem",
      "xl-2": "42rem",
      "xl-3": "48rem",
      "xl-4": "56rem",
      "xl-5": "64rem",
      "xl-6": "72rem",
      "xl-7": "80rem",
      "full": "100%",
      "min": "min-content",
      "max": "max-content"
    },
    fontFamily: {
      "poppins": "poppins, sans-serif",
      "sans-serif": "sans-serif"
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "xl-2": "1.5rem",
      "xl-3": "2rem",
      "xl-4": "2.25rem",
      "xl-5": "3rem",
      "xl-6": "3.75rem",
      "xl-7": "4.5rem",
      "xl-8": "6rem",
      "xl-9": "6.75rem",
      "xl-10": "7.5rem"
    },
    fontWeight: {
      "thin": 100,
      "extra-light": 200,
      "light": 300,
      "normal": 400,
      "medium": 500,
      "semi-bold": 600,
      "bold": 700,
      "extra-bold": 800,
      "black": 900
    },
    borderRadius: {
      "none": "0rem",
      "sm": "0.125rem",
      "base": "0.25rem",
      "md": "0.375rem",
      "lg": "0.5rem",
      "xl": "0.75rem",
      "xl-2": "1rem",
      "xl-3": "1.5rem",
      "full": "100rem"
    },
    boxShadow: {
      sm: "0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.05)",
      base: "0 0.25rem 0.75rem 0 rgb(0 0 0 / 0.05), 0 0.25rem 0.5rem -0.25rem rgb(0 0 0 / 0.05)",
      md: "0 1rem 1.5rem -0.25rem rgb(0 0 0 / 0.05), 0 0.5rem 1rem -0.5rem rgb(0 0 0 / 0.05)",
      lg: "0 2.4rem 3.75rem -0.75rem rgb(0 0 0 / 0.05), 0 0.75rem 1.5rem -1rem rgb(0 0 0 / 0.05)"
    },
    dropShadow: {},
    columns: {},
    blur: {}
  },
  plugins: [f, lc]
}
