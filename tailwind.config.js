/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Array of file paths to scan
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    // Add more file paths as needed
  ],
  theme: {
    extend: {
      colors: {
        container: "var(--container-bg)",
        secondary: {
          DEFAULT: "var(--secondary)",

          color: "var(--secondary-color)",
        },

        grey: "var(--grey)",
        primary: "var(--primary-color)",
        hero: {
          primary: "var(--hero-primary)",
        },
      },
      fontFamily: {
        outfit: "Outfit, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      boxShadow: {
        card: "8px 8px 0px 1px #ffbe99",
        containerCard: "6px 6px 0px 2px #1e1e1e",
      },
    },
  },
  plugins: [],
};
