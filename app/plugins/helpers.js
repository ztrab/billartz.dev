export default (context, inject) => {
  const scrollToTop = () => {
    const main = document.getElementById('mainContent')
    if (main && typeof window !== 'undefined') {
      main.focus()
      main.scrollTo(0, 0)
    }
  }

  inject('scrollToTop', scrollToTop)
}
