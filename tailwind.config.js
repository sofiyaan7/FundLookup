/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0B0F',
          light: '#F6F7F9',
        },
        card: {
          DEFAULT: '#13131A',
          light: '#FFFFFF',
        },
        border: {
          DEFAULT: '#22222B',
          light: '#E5E7EB',
        },
        accent: {
          DEFAULT: '#3FB950',
          dim: '#2C8A3C',
        },
        accent2: {
          DEFAULT: '#2F81F7',
          dim: '#235FB8',
        },
        muted: {
          DEFAULT: '#9CA3AF',
          light: '#6B7280',
        },
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,185,80,0.15), 0 8px 24px -8px rgba(63,185,80,0.25)',
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
