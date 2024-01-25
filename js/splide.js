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