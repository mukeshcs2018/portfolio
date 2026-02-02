/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        base: {
          950: "#0b0f1a",
          900: "#0e1322",
          800: "#121a2e",
          700: "#1a2440",
        },
        accent: {
          500: "#5ad2ff",
          600: "#3cc0ff",
          700: "#18a7f0",
        },
      },
      boxShadow: {
        glass: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        halo: "radial-gradient(circle at 20% 20%, rgba(90,210,255,0.18), transparent 45%)",
        aurora: "radial-gradient(circle at 80% 0%, rgba(92,84,255,0.2), transparent 40%)",
      },
    },
  },
  plugins: [],
};


