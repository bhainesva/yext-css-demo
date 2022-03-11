const colors = require('tailwindcss/colors');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        // Backgrounds
        'background': withOpacityValue('--background'),
        'container-background': withOpacityValue('--containerBackground'),

        // Buttons
        'button-primary': withOpacityValue('--brand-primary'),
        'button-primary-hover': withOpacityValue('--black'),
        'button-primary-text': withOpacityValue('--white'),

        'button-secondary': withOpacityValue('--brand-secondary'),
        'button-secondary-hover': withOpacityValue('--white'),
        'button-secondary-text': withOpacityValue('--black'),

        // Text
        'text': colors.gray[300],
        'heading': withOpacityValue('--white'),

        // Links
        'link-primary': withOpacityValue('--brand-primary'),
        'link-primary-hover': withOpacityValue('--black'),
      }
    },
  },
  plugins: [],
}
