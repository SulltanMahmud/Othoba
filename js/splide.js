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
