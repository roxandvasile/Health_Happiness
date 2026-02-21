new Swiper(".testimoniale-swiper", {
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  effect: "coverflow",
  coverflowEffect: {
    rotate: 35,
    depth: 120,
    stretch: 0,
    modifier: 1,
    slideShadows: false,
    trasform: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1280: { slidesPerView: 3 },
  },
  injectStylesUrls: ["assets/styles.css"],
});
