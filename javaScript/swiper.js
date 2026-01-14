const swiper = new Swiper('.swiper', {
  loop: false,
  spaceBetween: 20,
  slidesPerView: 4,

  slidesOffsetBefore:40,
  slidesOffsetAfter: 40,
  
  speed: 500,

  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints:{
    0:{
      slidesPerView: 1,
    },
    480:{
      slidesPerView: 1,
    },
    760:{
      slidesPerView: 2,
    },
    1200:{
      slidesPerView: 4,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});