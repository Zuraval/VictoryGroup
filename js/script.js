const swiper = new Swiper('.swiper', {

  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,

  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },

});

const swiper2 = new Swiper('.main__reviews__swiper', {

  direction: 'vertical',
  slidesPerView: 6,
  spaceBetween: 10,
  
  loop: true,

  navigation: {
    nextEl: '.main__reviews__s-button-next',
    prevEl: '.main__reviews__s-button-prev',
  },

});