const desert = new Splide("#desert", {
  arrows: false,
  pagination: true,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,
  gap: 10,
  perMove: 1,
  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },
  },

  breakpoints: {
    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },
});
desert.mount();
