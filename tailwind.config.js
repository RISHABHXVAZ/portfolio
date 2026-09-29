/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        surface: {
          50: '#fbfbfb',
          100: '#f7f7f8',
          200: '#efefef',
          300: '#e5e5e6',
        },
        accent: {
          DEFAULT: '#1e3a8a', // classic dark navy/blue
          light: '#2563eb',
          subtle: '#eff6ff',
          border: '#bfdbfe',
        }
      }
    },
  },
  plugins: [],
}
