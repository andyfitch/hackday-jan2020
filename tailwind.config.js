const colors = require('./tailwind.colors.js')

module.exports = {
  theme: {
    colors,
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px'
    },
    width: {
      400: '400px',
    },
    height: {
      100: '100px'
    },
    spacing: {
      'none': '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
    },
    borderColor: theme => ({
      ...theme('colors')
    }),
    borderWidth: {
      px: '1px',
    },
    fontWeight: {
      '400': 400
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      condensed: ['HelveticaNeue-CondensedBold', 'Helvetica', 'Arial', 'sans-serif']
    },
    inset: {
      0: 0,
      auto: 'auto',
      full: '100%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    opacity: {
      0: 0,
      10: 0.1,
      20: 0.2,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      100: 1
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [
  ]
}
