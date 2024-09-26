/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#10002B',
        foreground: '#C77DFF',
        card: '#240046',
        button: '#5A189A',
        muted: '#6c757d',
      },
    },
  },
  plugins: [],
};
