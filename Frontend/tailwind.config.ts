import { RotateCounterClockwiseIcon } from "@radix-ui/react-icons";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			button: '#9C9C9C',
  			buttonHover: '#5F5F5F',
  			searchBar: '#D9D9D9',
  			selector: 'rgba(147, 214, 240, 0.17)',
  			noMatch: 'rgba(104, 205, 35, 0.15);',
  			oneMatch: 'rgba(205, 27, 0, 0.59);',
  			multipleMatches: 'rgba(255, 165, 0, 0.59);',
  			foreground: 'hsl(var(--foreground))',
			login: "#333333",
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			oxygen: ['Oxygen', 'sans-serif'],
  			oxygenMono: ['Oxygen Mono', 'monospace'],
  			roboto: ['Roboto', 'sans-serif']
  		},
  		blur: {
  			bg: '299.5px'
  		},
  		backgroundImage: {
  			neon: "url('/background/background.svg')"
  		},
  		screens: {
  			'xsm': '435px',
  			'2xsm': '325px'
  		},
  		fontSize: {
  			'2xsm': '0.625rem',
  			'3xsm': '0.55rem'
  		},
  		backdropBlur: {
  			noMatch: '34.5px'
  		},
  		boxShadow: {
  			'custom-green': '0 -10px 20px 10px rgba(104, 205, 35, 0.15);',
  			'custom-red': '0 -10px 20px 10px rgba(205, 27, 0, 0.59);',
  			'custom-orange': '0 -10px 20px 10px rgba(255, 165, 0, 0.59);'
  		},
  		keyframes: {
  			appear: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			disappear: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			orangeRed: {
  				'0%': {
  					backgroundColor: 'rgba(255, 165, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(255, 165, 0, 0.59);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(205, 27, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(205, 27, 0, 0.59);'
  				}
  			},
  			greenRed: {
  				'0%': {
  					backgroundColor: 'rgba(104, 205, 35, 0.15)',
  					boxShadow: '0 -10px 20px 10px rgba(104, 205, 35, 0.15);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(205, 27, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(205, 27, 0, 0.59);'
  				}
  			},
  			redGreen: {
  				'0%': {
  					backgroundColor: 'rgba(205, 27, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(205, 27, 0, 0.59);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(104, 205, 35, 0.15)',
  					boxShadow: '0 -10px 20px 10px rgba(104, 205, 35, 0.15);'
  				}
  			},
  			orangeGreen: {
  				'0%': {
  					backgroundColor: 'rgba(255, 165, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(255, 165, 0, 0.59);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(104, 205, 35, 0.15)',
  					boxShadow: '0 -10px 20px 10px rgba(104, 205, 35, 0.15);'
  				}
  			},
  			greenOrange: {
  				'0%': {
  					backgroundColor: 'rgba(104, 205, 35, 0.15)',
  					boxShadow: '0 -10px 20px 10px rgba(104, 205, 35, 0.15);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(255, 165, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(255, 165, 0, 0.59);'
  				}
  			},
  			redOrange: {
  				'0%': {
  					backgroundColor: 'rgba(205, 27, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(205, 27, 0, 0.59);'
  				},
  				'100%': {
  					backgroundColor: 'rgba(255, 165, 0, 0.59)',
  					boxShadow: '0 -10px 20px 10px rgba(255, 165, 0, 0.59);'
  				}
  			},
  			slideIn: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
			  rotateArrow: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(180deg)' }, // Correct value for rotating to point down
			  },
			  rotateArrowBack: {
				'0%': { transform: 'rotate(180deg)' },
				'100%': { transform: 'rotate(0deg)' }, // Correct value for rotating to point up
			  }
			
  		},
  		animation: {
  			appear: 'appear 0.7s ease-in-out forwards',
  			disappear: 'disappear 0.4s ease-in-out forwards',
  			slideIn: 'slideIn 1.2s ease-in-out forwards',
  			orangeRed: 'orangeRed 0.7s ease-in-out ',
  			greenRed: 'greenRed 0.7s ease-in-out ',
  			redGreen: 'redGreen 0.7s ease-in-out ',
  			orangeGreen: 'orangeGreen 0.7s ease-in-out ',
  			greenOrange: 'greenOrange 0.7s ease-in-out ',
  			redOrange: 'redOrange 0.7s ease-in-out ',
			rotateArrow: 'rotateArrow 0.2s linear forwards', 
			rotateArrowBack: 'rotateArrowBack 0.2s linear forwards'

		},
  		borderWidth: {
  			'4': '4px',
  			'5': '5px',
  			'6': '6px'
  		},
  		margin: {
  			'46': '12.5rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")],
  };

export default config;