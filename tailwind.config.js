/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf5ec",
        porcelain: "#fffaf3",
        sand: "#e7d8c4",
        oat: "#d6c4ab",
        charcoal: "#24211d",
        terracotta: "#b56f55",
        sage: "#8f9a78",
        gold: "#c49b5e",
        clay: "#8f5d4c"
      },
      boxShadow: {
        editorial: "0 24px 70px rgba(58, 43, 31, 0.13)",
        card: "0 18px 45px rgba(58, 43, 31, 0.12)",
        soft: "0 10px 30px rgba(58, 43, 31, 0.08)"
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
};
