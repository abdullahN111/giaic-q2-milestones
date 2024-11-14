import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkmain: "rgb(22, 18, 18)",
      },
      screens: {
       
        'sm': '360px',  
        'md': '520px',  
        'lg': '936px', 
      },
      animation: {
        typewriter: 'typewriter 3s steps(30, end) forwards, blink 0.82s step-end infinite',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '103%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
} satisfies Config;
