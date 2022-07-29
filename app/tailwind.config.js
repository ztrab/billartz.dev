module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './pages/*.vue',
    './nuxt.config.js'
  ],
  theme: {
    extend: {
      maxWidth: {
        1440: '1440px'
      },
      textColor: {
        primary: '#CD4100',
        secondary: '#EBDBB2'
      },
      backgroundColor: {
        highlight: 'rgb(51, 46, 42)',
        primary: '#EBDBB2',
        secondary: '#CD4100'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: []
}
