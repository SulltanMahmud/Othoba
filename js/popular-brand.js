// Most popular brand

const mostPopularSplide = new Splide("#most-popular", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 8,
  autoplay: true,
  interval: 4000,

  breakpoints: {
    576: {
      perPage: 2,
      perMove: 1,
    },

    992: {
      perPage: 4,
    },

    1200: {
      perPage: 4,
    },
  },
});

mostPopularSplide.mount();
