const splide2 = new Splide("#icon-slider", {
  arrows: false,
  pagination: false,
  perPage: 4,

  breakpoints: {
    576: {
      perPage: 1,
    },

    992: {
      perPage: 2,
    },

    1200: {
      perPage: 4,
    },
  },
});
splide2.mount();
