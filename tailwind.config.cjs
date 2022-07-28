/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'op-rose': '#ec549f',
        'op-gold': '#f5af4c',
        'op-mint': '#78facd',
        'op-blue': '#546cff',
        'op-pink': '#a64cf3',
        'op-primary': {
          0: '#1b83fb',
          1: '#0076ff',
          2: '#0052ff',
          3: '#044ba1',
        },
        'op-error': {
          0: '#de0b5d',
        },
        'mono': {
          0: '#f2f2f2',
          1: '#e6e6e6',
          2: '#d9d9d9',
          3: '#a8a8a8',
          4: '#989898',
          5: '#8d8d8d',
          6: '#787878',
          7: '#545454',
          8: '#404040',
          9: '#363636',
          10: '#232323',
          11: '#1e1e1e',
          12: '#181818',
          13: '#101010',
          14: '#080808',
        },
      },
      fontSize: {
        '2xl-0.5': [
          '28px',
          {
            'line-height': '2.125rem' /* 32px */,
          },
        ],
      },
      screens: {
        'sm-vertical': { raw: '(min-height: 540px)' },
      },
    },
  },
  plugins: [],
};

