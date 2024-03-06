import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#1E2019",
      foreground: "#FFFAFF"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'tarawera': {
          '50': '#edfcfe',
          '100': '#d2f5fb',
          '200': '#abeaf6',
          '300': '#71d9ef',
          '400': '#30bee0',
          '500': '#14a2c6',
          '600': '#1482a6',
          '700': '#176987',
          '800': '#1c566e',
          '900': '#183f52',
          '950': '#0c2e40',
        },
      }
    },
  },
  plugins: [],
};
export default config;
