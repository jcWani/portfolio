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

        "black-50": "rgba(var(--black-50))",
        "black-300": "rgba(var(--black-300))",
        "black-500": "rgba(var(--black-500))",
        "black-600": "rgba(var(--black-600))",
        "black-700": "rgba(var(--black-700))",
        "black-800": "rgba(var(--black-800))",

        "blue-violet": {
          50: "#efeeff",
          100: "#e2e0ff",
          200: "#cac7fe",
          300: "#aaa5fc",
          400: "#8881f8",
          500: "#6b63f1",
          600: "#4f46e5",
          700: "#4038ca",
          800: "#3730a3",
          900: "#332e81",
          950: "#1e1b4b",
        },
      },

      backgroundImage: {
        "contact-overlay":
          "linear-gradient(transparent 0%, rgb(30, 64, 175, 0.7) 100%)",
        "contact-overlay-dark":
          "linear-gradient(transparent 0%, rgb(0, 111, 114, 0.7) 100%)",
      },

      boxShadow: {
        navsw: "0 20px 60px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
