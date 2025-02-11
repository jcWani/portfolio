/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: "Sora, sans-serif",
    },

    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        "primary-light": "rgba(var(--primary-light))",
        "primary-lighter": "rgba(var(--primary-lighter))",
        "primary-dark": "rgba(var(--primary-dark))",
      },

      backgroundImage: {
        "contact-overlay":
          "linear-gradient(transparent 0%, rgb(30, 64, 175, 0.7) 100%)",
        "contact-overlay-dark":
          "linear-gradient(transparent 0%, rgb(0, 111, 114, 0.7) 100%)",
        contact: "url('../public/portfolio-home.png')",
        test: "linear-gradient(transparent 0%, rgb(30, 64, 175, 0.7) 100%), './src/assets/images/contact.webp')",
      },

      boxShadow: {
        navsw: "0 20px 60px rgba(0, 0, 0, 0.03)",
      },

      maxWidth: {
        "8xl": "88rem",
        xxs: "10rem",
      },
    },
  },
  plugins: [],
};
