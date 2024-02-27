// After hot deals splide img

const afterhotdealsplide = new Splide("#afterhotdealsplide", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  // gap:20,
  perMove: 1,
  autoplay: true,
  interval: 2000,
  breakpoints: {
    576: {
      perPage: 1,
    },

    992: {
      perPage: 2,
    },

    1200: {
      perPage: 3,
    },
  },
});

afterhotdealsplide.mount();
