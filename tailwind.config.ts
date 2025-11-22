import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
        },
        dawn: {
          100: "#fdf6ec",
          200: "#fde6c8",
          300: "#fbd59f",
          400: "#f6b860",
          500: "#ea8f27",
          600: "#cf6c14"
        },
        pulse: {
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#c084fc",
          400: "#a855f7",
          500: "#7c3aed"
        }
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(120% 120% at 50% 0%, rgba(124,58,237,0.35), rgba(234,143,39,0.25), rgba(17,24,39,0.95))"
      },
      fontFamily: {
        display: ["var(--font-reem-kufi)"],
        body: ["var(--font-cairo)"],
        latin: ["var(--font-manrope)"]
      }
    }
  },
  plugins: []
};

export default config;
