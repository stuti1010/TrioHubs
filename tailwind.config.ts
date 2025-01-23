import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		backgroundImage: {
			'hero-pattern': "url('/banner-bg.png')",
			'footer-pattern': "url('/footer.jpg')",
		  },
  		colors: {
			primary: '#006FEE',
             secondary:'#17303B',
           light: '#F8F8F8',
            dark: '#111111',
           lightgray:'#D3D3D3',
			white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
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
  				'5': 'hsl(var(--chart-5))',
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			meteor: 'meteor 5s linear infinite'
  		},
  		keyframes: {
			"spin-slow": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(360deg)" },
        },
			fadeInUp: {
			  '0%': {
				opacity: '0',
				transform: 'translateY(20px)',
			  },
			  '100%': {
				opacity: '1',
				transform: 'translateY(0)',
			  },
			},
		  },
		  animation2: {
			fadeInUp: 'fadeInUp 1s ease-out',
		  },
		  animation3: {
			'spin-slow': 'spin-slow 10s linear infinite',
		  },
	  
  	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
