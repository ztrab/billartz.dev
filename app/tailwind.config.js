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
        primary: '#2dd4bf',
        secondary: '#EBDBB2'
      },
      backgroundColor: {
        highlight: '#374151',
        primary: '#EBDBB2',
        secondary: '#2dd4bf'
      },
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: []
}
