/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Activamos el modo oscuro manual por clase
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7A0026', // Rojo vino original
          light: '#9e1b44',   // Más brillante para modo oscuro
          dark: '#520019',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712', // Fondo ultra oscuro para modo noche
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
