/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        red: {
          50: '#faebeb',
          100: '#f8e0e0',
          200: '#f0bfbf',
          300: '#cf3232',
          400: '#ba2d2d',
          500: '#a62828',
          600: '#9b2626',
          700: '#7c1e1e',
          800: '#5d1616',
          900: '#481212',
        },
        green: {
          50: '#e6fbef',
          100: '#b1f1ce',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },
      },

      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(207, 50, 50), rgba(207, 50, 50) 12.5%, transparent 12.5%, transparent)',
      },

      fontSize: {
        '5xl': '2.5rem',
      },

      backgroundSize: {
        stripes: '100% 8px',
      },

      blur: {
        full: '194px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
