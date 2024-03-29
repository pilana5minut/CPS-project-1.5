const sliderContainer = document.querySelector('.swiper')
const sliderWrapper = document.querySelector('.swiper-wrapper')
const sliderSlide = document.querySelectorAll('.swiper-slide')
const sliderPagination = document.querySelector('.swiper-pagination')

export default function sliderClassToggle() {
  sliderContainer.classList.toggle('swiper')
  sliderWrapper.classList.toggle('swiper-wrapper')
  sliderSlide.forEach((elem) => {
    elem.classList.toggle('swiper-slide')
  })
  sliderPagination.classList.toggle('visually-hidden')
}
