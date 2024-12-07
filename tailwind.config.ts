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
  		screens: {
  			xs: '380px'
  		},
		  backgroundImage: {
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  },
  		colors: {
			primary: "#000000",
			secondary: "#db4444",
			background: "#ffffff",
            accent: "#00FF66",
			highlight: "#FFAD33",
            graybg: "#F5F5F5",
			graytext: "#7B7B7B",
			text2: "#FAFAFA",
			text: "#000000"
  		},
  		container: {
  			center: true,
  			padding: '1rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  
};
export default config;
