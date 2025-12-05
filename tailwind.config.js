/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f5f2ea",
        ink: "#111111",
        meadow: "#53693b",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widerish: "0.28em",
      },
    },
  },
  plugins: [],
};
