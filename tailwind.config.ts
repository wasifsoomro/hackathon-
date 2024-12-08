import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/Rectangle 2.jpg')", // Make sure path is correct
      },
      colors: {
        primary: '#000',
        accent: '#ff5722',
        lightGray: '#F0F0F0',
      },
      fontFamily: {
        sans: ['IntegralCF'],
        satoshi: ['Satoshi'],
      },
    },
  },
  plugins: [],
} satisfies Config;
