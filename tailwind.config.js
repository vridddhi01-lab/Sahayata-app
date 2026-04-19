/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f2ea",
        ink: "#1f2937",
        forest: "#1f4d3a",
        moss: "#5f7a61",
        sand: "#d9c7a4",
        mist: "#eef2eb"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(39, 52, 45, 0.08)"
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Segoe UI", "sans-serif"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both"
      }
    }
  },
  plugins: []
};
