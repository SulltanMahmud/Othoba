// Top weekly
const weeklybrand = new Splide("#weekly-brand", {
  arrows: false,
  pagination: true,
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 2000,
  gap: "1rem",
  // focus: "center",

  breakpoints: {
    576: {
      perPage: 1,
      perMove: 1,
    },

    992: {
      perPage: 3,
    },

    1200: {
      perPage: 3,
    },
  },
});

weeklybrand.mount();
