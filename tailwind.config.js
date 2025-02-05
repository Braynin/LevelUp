// tailwind.config.js
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,css}", // Ajusta las rutas según tu estructura de proyecto
  ],
  theme: {
    screens: {
      celular: { max: "850px" },
      escritorio: { min: "850px" },
    },
    extend: {
      animation: {
        fadeInOut1: "fadeInOut1 20s ease-in-out infinite",
        fadeInOut2: "fadeInOut2 20s ease-in-out infinite",
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
      colors: {
        negro: "#1E1E1E",
        neon: "#5A1AE5",
        fucsia: "#F92663",
        anaranjado: "#FF8E35",
        blanco: "#e6e4e4",
        gris: "#bfbfbf",
        celeste: "#6fabe6",
        celesteOscuro: "#0579d8",
      },
      fontFamily: {
        audiowide: ["Audiowide", "serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
