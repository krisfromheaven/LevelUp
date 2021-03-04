import timer from './timer'
import checkNum from './checkNum'


window.addEventListener('DOMContentLoaded', () => {
  let deadline = '2021-05-18'

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  


  timer('.order__timer', deadline)
  checkNum('input[name="user_phone"]')
})
