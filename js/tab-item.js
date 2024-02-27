const tabitem = new Splide("#tabitem", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  autoplay: true,
  interval: 2000,
  gap: 10,

  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },

  
});

tabitem.mount();

const tabitem2 = new Splide("#tabitem-2", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  autoplay: true,
  interval: 2000,
  gap: 10,

  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },
});

tabitem2.mount();


const toprated = new Splide("#toprated", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  autoplay: false,
  interval: 2000,
  gap: 10,
  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },


    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },
});

toprated.mount();

const newarrival1 = new Splide("#newarrival-1", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  autoplay: true,
  interval: 2000,
  gap: 10,

  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },

    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },
});

newarrival1.mount();

const feature = new Splide("#feature", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 5,
  autoplay: true,
  interval: 2000,
  gap: 10,

  breakpoints: {
    576: {
      perPage: 2,
      gap: 10,
      perMove: 1,
    },
    
    768: {
      perPage: 3,
      gap: 10,
      perMove: 1,
    },
  },
});

feature.mount();
