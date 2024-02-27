const splide2 = new Splide("#icon-slider", {
  arrows: false,
  pagination: false,
  perPage: 4,


  breakpoints: {
    576: {
      perPage: 1,
    },
  },

  breakpoints: {
    768: {
      perPage: 2,
      
    },
  },
});
splide2.mount();
