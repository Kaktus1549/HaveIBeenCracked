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
        selector: "rgba(147, 214, 240, 0.17)",
        noMatch: "rgba(104, 205, 35, 0.15);",
        oneMatch: "rgba(205, 27, 0, 0.59);",
        multipleMatches: "rgba(255, 165, 0, 0.59);",
      },
      fontFamily: {
        oxygen: ['Oxygen', 'sans-serif'],
        oxygenMono: ['Oxygen Mono', 'monospace'],
      },
      blur: {
        bg: "299.5px",
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
        '3xsm': '0.55rem',
      },
      backdropBlur:{
        noMatch: "34.5px",
      },
      boxShadow: {
        'custom-green': '0 -10px 20px 10px rgba(104, 205, 35, 0.15);',
        'custom-red': '0 -10px 20px 10px rgba(205, 27, 0, 0.59);',
        'custom-orange': '0 -10px 20px 10px rgba(255, 165, 0, 0.59);',
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        colors: {
          "0%": { backgroundColor: "rgba(255, 165, 0, 0.59)", boxShadow: "0 -10px 20px 10px rgba(255, 165, 0, 0.59);" },
          "100%": { backgroundColor: "rgba(205, 27, 0, 0.59)", boxShadow: "0 -10px 20px 10px rgba(205, 27, 0, 0.59);" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        },
        animation: {
          appear: "appear 0.7s ease-in-out forwards",
          colors: "colors 0.7s ease-in-out forwards",
          slideIn: "slideIn 1.2s ease-in-out forwards",
        },
        borderWidth:{
          '6': '6px',
          '5': '5px',
          '4': '4px',
        },
        margin:{
          '46': '12.5rem',
        }
      },
    },
    plugins: [],
  };

export default config;