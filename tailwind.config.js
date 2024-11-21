/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#f5f8ff',
          100: '#ebf1ff',
          200: '#d6e4ff',
          300: '#b3ccff',
          400: '#809fff',
          500: '#4d73ff',
          600: '#1a46ff',
          700: '#0033ff',
          800: '#0029cc',
          900: '#001f99',
          950: '#001466',
        },
        alpha: {
          white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.1)',
            20: 'rgba(255, 255, 255, 0.2)',
            30: 'rgba(255, 255, 255, 0.3)',
            40: 'rgba(255, 255, 255, 0.4)',
            50: 'rgba(255, 255, 255, 0.5)',
            60: 'rgba(255, 255, 255, 0.6)',
            70: 'rgba(255, 255, 255, 0.7)',
            80: 'rgba(255, 255, 255, 0.8)',
            90: 'rgba(255, 255, 255, 0.9)',
          },
          gray: {
            2: 'rgba(0, 0, 0, 0.02)',
            5: 'rgba(0, 0, 0, 0.05)',
            10: 'rgba(0, 0, 0, 0.1)',
            20: 'rgba(0, 0, 0, 0.2)',
            30: 'rgba(0, 0, 0, 0.3)',
            40: 'rgba(0, 0, 0, 0.4)',
            50: 'rgba(0, 0, 0, 0.5)',
            60: 'rgba(0, 0, 0, 0.6)',
            70: 'rgba(0, 0, 0, 0.7)',
            80: 'rgba(0, 0, 0, 0.8)',
            90: 'rgba(0, 0, 0, 0.9)',
          },
          accent: {
            10: 'rgba(77, 115, 255, 0.1)',
            20: 'rgba(77, 115, 255, 0.2)',
          },
          red: {
            10: 'rgba(239, 68, 68, 0.1)',
            20: 'rgba(239, 68, 68, 0.2)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
