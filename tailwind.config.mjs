/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants.js",
  ],
  theme: {
    extend: {
      screens: {
        s440: "434px",
      },
      fontFamily: {
        IRANSans: "IRANSans",
        IRANSansBlack: "IRANSansBlack",
        Kamand: "Kamand",
        KamandBlack: "KamandBlack",
      },
    },
  },
  plugins: [],
};
