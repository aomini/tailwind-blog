module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // 's': '360px',
        // // => @media (min-width:360px) { ... }

        'sm': '310px',
        // => @media (min-width: 640px) { ... }

        'md': '580px',
        // => @media (min-width: 768px) { ... }

        'lg': '820px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      width: {
        '1/6': '16.33%',
        '2/6': '32.66%',
        '3/6': '48.99%',
        '4/6': '65.33%',
        '5/6': '81.66%',
        '6/6': '98%',
      },
      ringWidth: {
        'DEFAULT': '2px',
        '6': '6px',
        '10': '10px',
      }, zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '50': 50,
        '75': 75,
        '100': 100,
        'auto': 'auto',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
      },
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(-60deg)' },
          '25%': { transform: 'rotate(-120deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },


    }
  },
  variants: {
    extend: {
      flexDirection: ['hover', 'focus'],
      flexWrap: ['hover', 'focus'],
      width: ['hover', 'focus'],
      backgroundColor: ['active'],
      ringWidth: ['hover', 'active'],
      transitionDelay: ['hover', 'focus'],
      translate: ['active', 'group-hover'],
      transform: ['hover', 'focus'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      animation: ['hover', 'focus'],
      divideColor: ['group-hover'],




    },
  },
  plugins: [],
}