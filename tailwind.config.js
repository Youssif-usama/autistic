/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0 84 165)",
        secondary: "rgb(244 121 69)",
        light: "#F2F3F8",
        dark: "#333333",
      },
    },
  },
  plugins: [],
}; 