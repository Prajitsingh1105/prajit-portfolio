/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1a2332",
        primary: "#ff4c60",
        surface: "#1d2022",
        "on-surface": "#e1e2e4",
        secondary: "#bec7db",
        "on-surface-variant": "#e3bebe",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
        display: ["Nunito Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        gutter: "24px",
        "card-padding": "32px",
        "sidebar-width": "80px",
        "container-max": "1140px",
        "section-gap": "120px"
      }
    },
  },
  plugins: [],
}