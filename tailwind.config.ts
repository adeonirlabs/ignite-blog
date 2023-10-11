import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("/assets/header.jpg")',
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#e7edf4',
          200: '#c4d4e3',
          300: '#afc2d4',
          400: '#7b96b2',
          500: '#3a536b',
          600: '#1c2f41',
          700: '#112131',
          800: '#0b1b2b',
          900: '#071422',
          950: '#040f1a',
        },
      },
    },
  },
  plugins: [],
}
export default config
