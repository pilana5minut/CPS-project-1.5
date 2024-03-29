import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import sliderClassToggle from './slider-class-toggle.js'

///////////////////////////////////////////////////////////////////////////////

const optionSlider = {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },


  slidesPerView: 1.187,
  spaceBetween: 16,
  // autoplay: {
  //   delay: 1000,
  // },
}
const classNameWrapper = '.brands__slider'
const initBreakPoint = 576
let currentInstance

///////////////////////////////////////////////////////////////////////////////

// Инстанцирует класс Swiper
function initSlider() {
  sliderClassToggle.addClassSlider()
  currentInstance = new Swiper(`${classNameWrapper}`, optionSlider)
}

// Инстанцирует класс Swiper по условию, в момент загрузки.
window.addEventListener("load", function () {
  if (window.innerWidth <= initBreakPoint) {
    initSlider()
    console.log("🚥  -- initialization 🚥", currentInstance)
  } else {
    sliderClassToggle.removeClassSlider()
  }
});

// Инстанцирует или уничтожает класс Swiper по условию, при наступлении события в объекте MediaQueryList.
window.matchMedia(`(max-width: ${initBreakPoint}px)`).addEventListener('change', (evt) => {
  console.log("🚥  evt.matches  🚥", evt.matches)
  if (evt.matches) {
    initSlider()
    console.log("🚥  -- initialization 🚥", currentInstance)
  }
  else {
    currentInstance.destroy()
    sliderClassToggle.removeClassSlider()
    console.log("🚥  -- destroyed 🚥", currentInstance)
  }
})
