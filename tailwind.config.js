// /** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

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
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'accent-bg': 'rgb(var(--accent-bg) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        'text-light': 'rgb(var(--text-light) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        code: 'rgb(var(--code) / <alpha-value>)',
        preformatted: 'rgb(var(--preformatted) / <alpha-value>)',
        marked: 'rgb(var(--marked) / <alpha-value>)',
        disabled: 'rgb(var(--disabled) / <alpha-value>)',
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
