import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import sliderClassToggle from './slider-class-toggle.js'

///////////////////////////////////////////////////////////////////////////////

const classNameWrapper = '.brands__slider'
const initBreakPoint = 576
let currentInstance

///////////////////////////////////////////////////////////////////////////////

// Инстанцирует класс Swiper
function initSlider() {
  sliderClassToggle()

  currentInstance = new Swiper(`${classNameWrapper}`, {
    modules: [Pagination],
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
}

// Инстанцирует класс Swiper по условию, в момент загрузки.
window.addEventListener("load", function () {
  if (window.innerWidth <= initBreakPoint) {
    initSlider()
    console.log("🚥  -- initialization 🚥", currentInstance)
  } else {
    sliderClassToggle()
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
    sliderClassToggle()
    console.log("🚥  -- destroyed 🚥", currentInstance)
  }
})
