/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#20bd5a",
        },
        instagram: {
          pink: "#FD1D1D",
          orange: "#F56040",
          yellow: "#FCAF45",
        }
      },
      fontSize: {
        'hero': '56px',
      },
      height: {
        'hero': '500px',
        'hero-sm': '350px',
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
