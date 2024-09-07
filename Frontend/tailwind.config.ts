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
        background: "#030A0E",
        primary: "#93D6F0", 
        secondary: "#08394C",
        button: "#9C9C9C",
        searchBar: "#D9D9D9",
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        oxygenMono: ['Oxygen Mono', 'monospace'],
      },
      blur: {
        bg: "299.5px"
      },
      backgroundImage:{
        'neon': "url('/background/background.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
