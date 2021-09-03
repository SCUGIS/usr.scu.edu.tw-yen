$(async () => {
  // object-fit polyfill run
  objectFitImages();

  /* init Jarallax */
  jarallax(document.querySelectorAll('.jarallax'));

  let section = $('.section')
  let fixed = $('.fixed')

  let scroll = () => {
    let scrollTop = $(window).scrollTop()
    let innerHeight = window.innerHeight

    $(section).each((key, elm) => {
      let hiddenValue = parseFloat($(elm).attr('data-hidden'))
      if (hiddenValue) {
        let bottom = $(elm).offset().top + $(elm).height()
        let opacity = 1
        let hiddenLine = bottom - innerHeight
        let hiddenHeight = innerHeight * hiddenValue

        if (hiddenLine < scrollTop) {
          opacity = 0
        } else if (hiddenLine >= scrollTop) {
          opacity = (hiddenLine - scrollTop) / hiddenHeight
        }

        $(elm).css('opacity', opacity)
      }
    })


    $(fixed).each((key, elm) => {
      let top = $(elm).parent().offset().top
      let opacity = 0

      if (scrollTop > top - innerHeight * 1.5) {
        opacity = 1
      }

      $(elm).css('opacity', opacity)
    })
  }

  $(window).scroll(scroll)

  scroll()
})
