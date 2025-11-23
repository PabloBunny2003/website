/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: '#7A0026', // Rojo vino solicitado
              light: '#9e1b44',
              dark: '#520019',
            },
            gray: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              800: '#1f2937',
              900: '#111827',
            }
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
