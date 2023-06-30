/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // * Burada fontawesome uçak iconu için animasyon yazıldı.
      keyframes: {
        flying: {
          '0%, 100%': { transform: 'rotate(-45deg)' },
        },
        animation: {
          flying: 'wiggle 1s ease-in-out infinite',
        },
      }
    },
  },
  plugins: [],
}

