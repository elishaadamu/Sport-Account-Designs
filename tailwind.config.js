/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html", // Include the index.html file in the root directory
    "./public/**/*.{html,js}", // Include all HTML and JS files in the public directory
  ],
  theme: {
    extend: { 
      colors: {
        // Using modern `rgb`
        primary:          "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft":   "rgb(var(--color-primary-soft) / <alpha-value>)",
        secondery:        "rgb(var(--color-secondery) / <alpha-value>)",
        bgbody:           "rgb(var(--color-bgbody) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
