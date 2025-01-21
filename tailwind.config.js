/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft": "rgb(var(--color-primary-soft) / <alpha-value>)",
        secondery: "rgb(var(--color-secondery) / <alpha-value>)",
        bgbody: "rgb(var(--color-bgbody) / <alpha-value>)",
      },
      screens: {
        "max-sm": { max: "640px" }, // Custom breakpoint for max-width 640px
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
