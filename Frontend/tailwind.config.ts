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
        buttonHover: "#5F5F5F",
        searchBar: "#D9D9D9",
        selector: "rgba(147, 214, 240, 0.17)"
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
      screens:{
        "xsm": "435px",
        "2xsm": "325px",
      },
      fontSize: {
        '2xsm': '0.625rem',
      },
    },
  },
  plugins: [],
};
export default config;
