/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      // => @media (min-width: 320px) { ... }

      xs: "428px",
      // => @media (min-width: 428px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Roboto: ["Roboto Serif", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#121212",
        light: "#f5f5f5",
        primary: "#5CE1E6", // 240,86,199
        primaryDark: "#2563eb", // 80,230,217
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
