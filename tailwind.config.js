// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': "linear-gradient(38.73deg,rgba(128, 0, 128, 0.3) 0%,   rgba(128, 128, 128, 0.2) 50%, rgba(0, 128, 128, 0.2) 50%,   rgba(0, 128, 128, 0.3) 100%)",
      },
    },
  },
  plugins: [],
};
