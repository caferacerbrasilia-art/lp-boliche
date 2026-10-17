import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neon: {
          cyan: "#00ffff",
          pink: "#ff007f",
          magenta: "#ff00ff",
          purple: "#9d4edd",
          green: "#00ff88",
          lime: "#00ff00",
          yellow: "#ffee00",
          blue: "#00b4d8",
          orange: "#ff7700",
        },
        dark: {
          bg: "#07080f",
          surface: "#0f111e",
          card: "#141728",
          border: "#1f243d",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0, 255, 255, 0.45), 0 0 40px rgba(0, 255, 255, 0.15)",
        "neon-pink": "0 0 20px rgba(255, 0, 127, 0.45), 0 0 40px rgba(255, 0, 127, 0.15)",
        "neon-magenta": "0 0 20px rgba(255, 0, 255, 0.45), 0 0 40px rgba(255, 0, 255, 0.15)",
        "neon-green": "0 0 20px rgba(0, 255, 136, 0.45), 0 0 40px rgba(0, 255, 136, 0.15)",
        "neon-lime": "0 0 20px rgba(0, 255, 0, 0.45), 0 0 40px rgba(0, 255, 0, 0.15)",
        "neon-purple": "0 0 20px rgba(157, 78, 221, 0.45), 0 0 40px rgba(157, 78, 221, 0.15)",
        "neon-yellow": "0 0 20px rgba(255, 238, 0, 0.45), 0 0 40px rgba(255, 238, 0, 0.15)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1.2)" },
          "50%": { opacity: "0.6", filter: "brightness(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
