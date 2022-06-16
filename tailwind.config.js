// /** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


  module.exports = {
    content: [
      './app/views/**/*.html.erb',
      './app/helpers/**/*.rb',
      './app/assets/stylesheets/**/*.css',
      './app/javascript/**/*.js'
    ],
    theme: {
      extend: {
        colors: {
          bg: 'theme(colors.amber.900)',
          'accent-bg': 'theme(colors.amber.800)',
          text: 'theme(colors.amber.50)',
          'text-light': 'theme(colors.amber.100)',
          border: 'theme(colors.amber.300)',
          accent: 'theme(colors.zinc.400)',
          code: 'theme(colors.amber.500)',
          preformatted: 'theme(colors.amber.400)',
          marked: 'theme(colors.teal.400)',
          disabled: 'theme(colors.amber.800)',
        }
      },
      corePlugins: {
        aspectRatio: false
      },
      plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
      ]
    }
  }
