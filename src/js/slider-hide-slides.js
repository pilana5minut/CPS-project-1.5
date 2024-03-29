import { slideCount } from './slider.js'

const sliderWrapper = document.querySelector('.swiper-wrapper')
const sliderSlides = document.querySelectorAll('.swiper-slide')
const slidesStorage = []

export default {
  removeSlides: function () {
    for (let i = 0; i < sliderSlides.length; i++) {
      const element = sliderSlides[i];
      if (i >= slideCount) {
        slidesStorage.push(element)
        element.remove()
      }
    }
    // console.log("🚥  slidesStorage после УДАЛЕНИЯ слайдов  🚥", slidesStorage.length)
  },
  returnSlides: function () {
    for (let i = 0; i < slidesStorage.length; i++) {
      const element = slidesStorage[i];
      sliderWrapper.append(element)
    }
    slidesStorage.length = 0
    // console.log("🚥  slidesStorage после ВОЗВРАТА слайдов  🚥", slidesStorage.length)
  }
}
