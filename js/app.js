const myCarouselElement = document.querySelector('#header')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
})