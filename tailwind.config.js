// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,css}", // Ajusta las rutas según tu estructura de proyecto
  ],
  theme: {
    screens: {
      celularPequeno: { max: "480px" },
      celular: { max: "950px" },
      tablet: { min: "950px", max: "1200px" },
      escritorio: { min: "1200px" },
    },
    extend: {
      animation: {
        fadeInOut1: "fadeInOut1 6s ease-in-out infinite",
        fadeInOut2: "fadeInOut2 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut1: {
          "0%, 40%": { opacity: "1", zIndex: "10" },
          "45%, 100%": { opacity: "0", zIndex: "0" },
        },
        fadeInOut2: {
          "0%, 45%": { opacity: "0", zIndex: "0" },
          "50%, 90%": { opacity: "1", zIndex: "10" },
          "95%, 100%": { opacity: "0", zIndex: "0" },
        },
      },
    },
  },
  plugins: [],
};
