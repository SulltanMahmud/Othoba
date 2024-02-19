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
  },
});

mostPopularSplide.mount();
