/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        'glow': '0 0 8px rgba(255, 255, 255, 0.8)', // Custom glow shadow
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
    zIndex: {
      100: "100",
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-glow': {
          textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
        },
      }, ['responsive', 'hover'])
    }
  ],
};
