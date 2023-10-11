import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        header: 'url("/assets/header.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
