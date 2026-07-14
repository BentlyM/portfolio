import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#0B0D10",
            primary: {
              50: "#084425",
              100: "#0F6136",
              200: "#187F49",
              300: "#23A05D",
              400: "#2FBF71",
              500: "#4ECC8F",
              600: "#74D8AA",
              700: "#A0E5C5",
              800: "#C8F0DC",
              900: "#E8F9F0",
              DEFAULT: "#2FBF71",
              foreground: "#04150B",
            },
          },
        },
        light: {
          colors: {
            background: "#FAFAF7",
            primary: {
              50: "#E8F9F0",
              100: "#C8F0DC",
              200: "#A0E5C5",
              300: "#74D8AA",
              400: "#4ECC8F",
              500: "#2FBF71",
              600: "#23A05D",
              700: "#187F49",
              800: "#0F6136",
              900: "#084425",
              DEFAULT: "#127A43",
              foreground: "#FFFFFF",
            },
          },
        },
      },
    }),
  ],
}

module.exports = config;
