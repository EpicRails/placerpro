import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    "#0d1b2a",
          "navy-mid": "#1a2f4e",
          "navy-light": "#253f60",
          amber:   "#d97706",
          "amber-light": "#f59e0b",
          charcoal: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0d1b2a 0%, #1a2f4e 60%, #0d1b2a 100%)",
        "card-gradient":
          "linear-gradient(145deg, #1e293b 0%, #1a2f4e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
