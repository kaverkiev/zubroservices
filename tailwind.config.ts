import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          800: "#111827",
          700: "#1F2937",
          500: "#4B5563",
          400: "#6B7280",
          300: "#9CA3AF",
          200: "#E5E7EB",
          100: "#F3F4F6",
          50: "#F9FAFB",
        },
        brand: {
          50: "#F1F5F9",
          100: "#E2E8F0",
          500: "#334155",
          600: "#1E293B",
          700: "#0F1B2D",
          800: "#0A1322",
        },
        accent: {
          50: "#FBF7EC",
          100: "#F4ECD2",
          500: "#C9A14A",
          600: "#A88438",
          700: "#8A6A2B",
        },
        paper: {
          50: "#FDFBF5",
          100: "#F7F5EE",
          200: "#F0EBDE",
          300: "#E6DFCB",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-fraunces)",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(64, 50, 22, 0.04), 0 8px 24px -8px rgba(64, 50, 22, 0.10)",
        "card-lg": "0 2px 4px rgba(64, 50, 22, 0.04), 0 16px 40px -12px rgba(64, 50, 22, 0.16)",
        "ring-gold": "0 0 0 3px rgba(201, 161, 74, 0.18)",
      },
      backgroundImage: {
        "paper-grain":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.32 0 0 0 0 0.18 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
