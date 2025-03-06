import type { Config } from 'tailwindcss'
import { typography } from './src/config/tailwind/typography'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        mob: '375px',
        min_tablet: '768px',
        tablet: '1024px',
        pc: '1400px',
        visibleRnb: '1600px'
      }
    }
  },
  plugins: [typography]
}

export default config
