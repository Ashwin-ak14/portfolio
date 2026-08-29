import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#17241f", paper: "#f6f4ef", moss: "#5d735d", clay: "#c86843" },
      fontFamily: { sans: ["var(--font-geist)", "Arial", "sans-serif"], serif: ["var(--font-newsreader)", "Georgia", "serif"] },
    },
  },
  plugins: [],
};

export default config;
