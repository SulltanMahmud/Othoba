var splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  autoplay: true,
  arrows: false,
});

splide.mount();

const splide2 = new Splide("#icon-slider", {
  arrows: false,
  pagination: false,
  perPage: 4,
});
splide2.mount();

const hotDealsSplide = new Splide("#product", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 2,
  autoplay: true,
  interval: 2000,
  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});
hotDealsSplide.mount();

const desert = new Splide("#desert", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,
  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});
desert.mount();

const tabitem = new Splide("#tabitem", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,
  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});

tabitem.mount();

const tabitem2 = new Splide("#tabitem-2", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,

  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});

tabitem2.mount();

const newarrival = new Splide("#newarrival", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,

  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});

newarrival.mount();

const newarrival1 = new Splide("#newarrival-1", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 2000,

  breakpoints: {
    640: {
      height: "6rem",
    },
  },
});

newarrival1.mount();

// Most popular brand

const mostPopularSplide = new Splide("#most-popular", {
  arrows: false,
  pagination: false,
  type: "loop",
  perPage: 8,
  autoplay: true,
  interval: 4000,
});
mostPopularSplide.mount();

// weekly brands
const weeklybrand = new Splide("#weekly-brand", {
  arrows: false,
  pagination: true,
  type: "loop",
  perPage: 4,
  autoplay: true,
  interval: 4000,
  gap : 10
});
weeklybrand.mount();

// Nav scroll bamp
 const navbar = document.getElementById("nav-container");
 let scrolled = false;

 window.onscroll = function () {
   if (window.pageYOffset > 100) {
     navbar.classList.remove("top");
     if (!scrolled) {
       navbar.style.transform = "translateY(-70px)";
     }
     setTimeout(function () {
       navbar.style.transform = "translateY(0)";
       scrolled = true;
     }, 150);
   } else {
     navbar.classList.add("top");
     scrolled = false;
   }
 };

