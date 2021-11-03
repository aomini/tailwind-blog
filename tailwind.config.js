module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // 's': '360px',
        // // => @media (min-width:360px) { ... }

        'sm': '310px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
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
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      flexDirection: ['hover', 'focus'],
      flexDirection: ['hover', 'focus'],
      flexWrap: ['hover', 'focus'],
      width: ['hover', 'focus'],

    },
  },
  plugins: [],
}