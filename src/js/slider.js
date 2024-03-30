import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import sliderClassToggle from './slider-class-toggle.js'
import sliderHideSlides from './slider-hide-slides.js'

///////////////////////////////////////////////////////////////////////////////

const classNameWrapper = '.brands__slider'
const initBreakPoint = 576
const mediaQueryList = window.matchMedia(`(max-width: ${initBreakPoint}px)`)
let currentInstance
export const slideCount = 9 // Количество слайдов в мобильной версии (не может быть менее 3)

const optionSlider = {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.187,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
  },
}

///////////////////////////////////////////////////////////////////////////////

// Инстанцирует класс Swiper
function initSlider() {
  sliderClassToggle.addClassSlider()
  currentInstance = new Swiper(`${classNameWrapper}`, optionSlider)
}

// Инстанцирует класс Swiper по условию, в момент загрузки.
window.addEventListener("load", function () {
  if (window.innerWidth <= initBreakPoint) {
    sliderHideSlides.removeSlides()
    initSlider()
  } else {
    sliderClassToggle.removeClassSlider()
  }
});

// Инстанцирует или уничтожает класс Swiper по условию, при наступлении события в объекте MediaQueryList.
mediaQueryList.addEventListener('change', (evt) => {
  if (evt.matches) {
    sliderHideSlides.removeSlides()
    initSlider()
  }
  else {
    currentInstance.destroy()
    sliderClassToggle.removeClassSlider()
    sliderHideSlides.returnSlides()
  }
})
