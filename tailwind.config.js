/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f5f5dc", // beige
        ink: "#14120d",  // deep brown/black
        meadow: "#d2b48c", // tan accent
      },
      fontFamily: {
        display: [
          '"Galderglynn Esquire W 00 Book"',
          "Georgia",
          "Times New Roman",
          "serif",
        ],
        sans: [
          '"JetBrains Mono Variablefont Wght"',
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "system-ui",
          "sans-serif",
        ],
      },
      letterSpacing: {
        widerish: "0.28em",
      },
    },
  },
  plugins: [],
};
