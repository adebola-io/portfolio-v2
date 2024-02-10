import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      nectar: {
        "carnation-pink": "#fba4d0",
        "persian-pink": "#f178b6",
        byzantine: "#d01bb3",
        "prussian-blue": "#013255",
        topaz: "#ffcd82",
        "midnight-green": "#004251",
        "brilliant-rose": "#ff4ea8",
        "eagle-green": "#015669",
        "lavender-blue": "#b9d1ff",
        "alice-blue": "#e9f4ff",
      },
    },
    boxShadow: {
      "screen-depth": "-8px 8px 16px 0px rgba(0,0,0,0.15)",
      "logo-depth": "inset 6px 5px 4px 0px rgba(0,0,0,0.35)",
      "slice-shadow": "4px 4px 10px 0px rgba(0,0,0,0.25)",
      "very-subtle-shadow": "0px 4px 4px 0px rgba(0,0,0,0.25)",
      "layer-blur": "",
    },
    fontFamily: {
      syncopate: ["'Syncopate'", "sans-serif"],
      helvetica: ['"Helvetica Neue"', "serif"],
    },
  },
  plugins: [],
};
