import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import sliderClassToggle from './slider-class-toggle.js'
import hideSlides from './slider-hide-slides.js'

///////////////////////////////////////////////////////////////////////////////

export const slideCount = 9 // Не может быть менее 3
const classNameWrapper = '.brands__slider'
const initBreakPoint = 576
let currentInstance
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
    hideSlides.removeSlides()
    initSlider()
    // console.log("🚥  -- initialization 🚥", currentInstance)
  } else {
    sliderClassToggle.removeClassSlider()
  }
});

// Инстанцирует или уничтожает класс Swiper по условию, при наступлении события в объекте MediaQueryList.
window.matchMedia(`(max-width: ${initBreakPoint}px)`).addEventListener('change', (evt) => {
  if (evt.matches) {
    hideSlides.removeSlides()
    initSlider()
    // console.log("🚥  -- initialization 🚥", currentInstance)
  }
  else {
    currentInstance.destroy()
    sliderClassToggle.removeClassSlider()
    hideSlides.returnSlides()
    // console.log("🚥  -- destroyed 🚥", currentInstance)
  }
})
