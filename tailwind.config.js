/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-y": "#E0F998",
        "orange-f": "#FFA52E"
      },
      fontFamily: {
        regular: "Inter_400Regular",
        body: "Inter_500Medium",
        heading: "Inter_600SemiBold"
      }
    },
  },
  plugins: [],
}

