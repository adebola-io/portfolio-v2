import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      syncopate: ["'Syncopate'", "sans-serif"],
      helvetica: ['"Helvetica Neue"', "serif"],
    },
  },
  plugins: [],
};
