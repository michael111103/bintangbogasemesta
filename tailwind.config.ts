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
        teal: {
          50: "#e6f7f7",
          100: "#b3e8e8",
          200: "#80d9d9",
          300: "#4dcaca",
          400: "#26bfbf",
          500: "#00b4b4",
          600: "#009999",
          700: "#007a7a",
          800: "#005c5c",
          900: "#003d3d",
        },
        biru: {
          tosca: "#00B4B4",
          dark: "#007a7a",
          light: "#e6f7f7",
          mid: "#4dcaca",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
