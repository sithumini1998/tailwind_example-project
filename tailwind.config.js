/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
          bp:'600px'
      }
    },
  },
  plugins: [],
}
