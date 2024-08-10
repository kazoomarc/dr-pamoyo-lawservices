import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-red": "#B7263E",
        "brand-light": "#F9F4F5",
      },
      fontFamily: {
        georgia: ["Georgia", "Times New Roman", "Times", "serif"],
        work_sans: ["Work_Sans", "Sans"],
      },
    },
  },
  plugins: [],
};
export default config;
