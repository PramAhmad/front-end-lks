/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,vue}",
    "./pages/**/*.vue",
    "./layout/**/*.vue",
    "nuxt.config.{ts,js}",
    "./node_modules/flowbite/**/*.js"
    
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

