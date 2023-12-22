import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // media queries
    screens: {
      xs: { min: "280px", max: "320px" },
      sm: { min: "320px", max: "425px" },
      md: { min: "425px", max: "768px" },
      lg: { min: "768px", max: "1024px" },
      xl: { min: "1024px", max: "1440px" },
      "2xl": "1440px",
    },

    extend: {
      colors: {
        // text color
        "text-primary-purple": "#552583",
        "text-secondary-blue": "#1890FF",
        "text-tertiary-gray": "#101920",
        // buttons colors
        "btn-primary-purple": "#552583",
        "btn-secondary-yellow": "#FDB927",
        // hover and active color
        "highlight-active-purple": "#552583",
        "highlight-primary-blue": "#E6F7FF",
        "highlight-secondary-blue": "#1890FF",
      },

      fontSize: {
        fs8: "8px",
        fs10: "10px",
        fs12: "12px",
        fs14: "14px",
        fs16: "16px",
        fs18: "18px",
        fs20: "20px",
        fs24: "24px",
        fs28: "28px",
        fs32: "32px",
        fs36: "36px",
        fs38: "38px",
        fs40: "40px",
      },
    },
  },
  plugins: [],
};
export default config;
