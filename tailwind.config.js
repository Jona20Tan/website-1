/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        madimi: ['Madimi One', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['4rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'title-large': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'title': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['1.25rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};