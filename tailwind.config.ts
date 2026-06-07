import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#120302',
        secondary: '#250403',
        copper: '#6B2400',
        bronze: '#8C3A08',
        highlight: '#F7B38D',
        muted: '#C9B2A4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-copper': 'linear-gradient(135deg, #6B2400 0%, #8C3A08 100%)',
        'gradient-radial-copper': 'radial-gradient(circle at center, #8C3A08 0%, #6B2400 50%, transparent 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(107, 36, 0, 0.25)',
        'premium-lg': '0 35px 60px -15px rgba(107, 36, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
