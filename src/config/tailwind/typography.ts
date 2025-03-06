import plugin from 'tailwindcss/plugin'

export const typography = plugin(function ({ addUtilities }) {
  addUtilities({
    '.fz-10': {
      'font-size': '10px',
      'line-height': '14px',
      'letter-spacing': '-0.01em'
    },
    '.fz-12': {
      'font-size': '12px',
      'line-height': '18px',
      'letter-spacing': '-0.01em'
    },
    '.fz-14': {
      'font-size': '14px',
      'line-height': '22px',
      'letter-spacing': '-0.01em'
    },
    '.fz-16': {
      'font-size': '16px',
      'line-height': '24px',
      'letter-spacing': '-0.01em'
    },
    '.fz-18': {
      'font-size': '18px',
      'line-height': '28px',
      'letter-spacing': '-0.01em'
    },
    '.fz-20': {
      'font-size': '20px',
      'line-height': '30px',
      'letter-spacing': '-0.01em'
    },
    '.fz-24': {
      'font-size': '24px',
      'line-height': '34px',
      'letter-spacing': '-0.01em'
    },
    '.fz-28': {
      'font-size': '28px',
      'line-height': '38px',
      'letter-spacing': '-0.01em'
    },
    '.fz-32': {
      'font-size': '32px',
      'line-height': '44px',
      'letter-spacing': '-0.01em'
    },
    '.fw-400': {
      'font-weight': '400'
    },
    '.fw-500': {
      'font-weight': '500'
    },
    '.fw-700': {
      'font-weight': '700'
    }
  })
})
