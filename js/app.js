const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
//   loop: true,
// slidesPerView: 6,
spaceBetween: 10,
freeMode: true,
autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      },
  // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});