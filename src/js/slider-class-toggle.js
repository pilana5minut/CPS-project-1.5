const sliderContainer = document.querySelector('.swiper')
const sliderWrapper = document.querySelector('.swiper-wrapper')
const sliderSlides = document.querySelectorAll('.swiper-slide')
const sliderPagination = document.querySelector('.swiper-pagination')

// const sliderContainer = document.querySelector('.brands__slider')
// const sliderWrapper = document.querySelector('.brands__wrapper')
// const sliderSlides = document.querySelectorAll('.card-brand')
// const sliderPagination = document.querySelector('.brands__slider-pagination')

// export default function sliderClassToggle() {
//   sliderContainer.classList.toggle('swiper')
//   sliderWrapper.classList.toggle('swiper-wrapper')
//   sliderSlides.forEach((elem) => {
//     elem.classList.toggle('swiper-slide')
//   })
//   sliderPagination.classList.toggle('visually-hidden')
// }

export default {
  addClassSlider: function () {
    sliderContainer.classList.add('swiper')
    sliderWrapper.classList.add('swiper-wrapper')
    sliderSlides.forEach((elem) => {
      elem.classList.add('swiper-slide')
    })
    sliderPagination.classList.remove('visually-hidden')
  },

  removeClassSlider: function () {
    sliderContainer.classList.remove('swiper')
    sliderWrapper.classList.remove('swiper-wrapper')
    sliderSlides.forEach((elem) => {
      elem.classList.remove('swiper-slide')
    })
    sliderPagination.classList.add('visually-hidden')
  },
}
