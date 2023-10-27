/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        red_hat_display: ["Red Hat Display", "sans-serif"]
      },
      colors: {
        // primary
        pale_blue: "hsl(225, 100%, 94%)",
        bright_blue: "hsl(245, 75%, 52%)", 
        // neutral 
        very_pale_blue: "hsl(225, 100%, 98%)",
        desaturated_blue: "hsl(224, 23%, 55%)",
        dark_blue: "hsl(223, 47%, 23%)"
      }
    },
  },
  plugins: [],
}