/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        small: '640px',
        medium: '768px',
        large: '960px',
        extraLarge: '1200px',
      },
    },
    fontFamily: {
      primary: 'var(--font-ubuntu)',
    },
    extend: {
      colors: {
        primary: '#1c1c22',
        accent: {
          default: '#00ff99',
          hover: '#00e187',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
