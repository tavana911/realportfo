import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        paper: "#F5F3EF",
        fog: "#8C8B87",
        line: "#1E1E1E",
        rec: "#E9312F"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      letterSpacing: {
        widest2: "0.35em"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0.25" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s steps(1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
