/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Masquerade Ball palette — midnight velvet, candlelight gold, deep emerald
        ink: {
          DEFAULT: "#06060c",
          50: "#0b0a16",
          100: "#0f0d1d",
          200: "#151229",
        },
        // "brand" = candlelight gold (the masquerade's warm glow)
        brand: {
          50: "#fdf8ec",
          100: "#faedc8",
          200: "#f5dd96",
          300: "#eecb63",
          400: "#e3b53a",
          500: "#d4a017",
          600: "#b8830f",
          700: "#946410",
          800: "#7a5014",
          900: "#674315",
        },
        // "teal" slot repurposed as deep emerald (house-of-the-serpent green)
        teal: {
          400: "#34d399",
          500: "#0f8f5f",
          600: "#0a6e49",
        },
        // "violet" slot = royal masquerade amethyst
        violet: {
          400: "#b794f6",
          500: "#9061d6",
          600: "#6b3fae",
        },
      },
      fontFamily: {
        sans: [
          "Inter var",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Clash Display", "Inter var", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(28,99,245,0.45)",
        "glow-teal": "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(20,184,166,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(4%,-6%) scale(1.1)" },
          "66%": { transform: "translate(-4%,4%) scale(0.95)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.5s infinite",
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
