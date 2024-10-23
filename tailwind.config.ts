import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '6px 13px 23px -5px rgba(0, 0, 0, 0.462)',
      },
      fontFamily: {
        ntr: ['"NTR"', 'sans-serif']
      },
      colors: {
        darkBlack: '#1F1F1F',
        platinum: '#E6E6E6',
        customDarkCyan: '#5C80BC',
        customDarkGray: '#8B8B8B',
        customGray: '#2B2B2B',
        customWhite: '#FAF9F6',
        background: {
          light: "#FAF9F6",
          dark: "#2B2B2B"
        },
        foreground: {
          light: "#2B2B2B",
          dark: "#FFFFFF"
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media'
};
export default config;
