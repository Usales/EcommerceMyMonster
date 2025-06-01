/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  safelist: [
    'bg-yellow-500', 'hover:bg-yellow-400', 'from-yellow-600/30', 'to-yellow-800/30',
    'bg-blue-500', 'hover:bg-blue-400', 'from-blue-600/30', 'to-blue-800/30',
    'bg-red-500', 'hover:bg-red-400', 'from-red-600/30', 'to-red-800/30',
    'bg-purple-500', 'hover:bg-purple-400', 'from-purple-600/30', 'to-purple-800/30',
    'bg-pink-500', 'hover:bg-pink-400', 'from-pink-600/30', 'to-pink-800/30',
    'bg-green-500', 'hover:bg-green-400', 'from-green-600/30', 'to-green-800/30',
    'bg-orange-500', 'hover:bg-orange-400', 'from-orange-600/30', 'to-orange-800/30',
  ],
  plugins: [],
} 