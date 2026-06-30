/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A",   // Deep navy
          light: "#1E293B",
          dark: "#020617",
        },
        accent: {
          DEFAULT: "#F59E0B",   // Amber
          hover: "#D97706",
          light: "#FCD34D",
        },
        soft: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}