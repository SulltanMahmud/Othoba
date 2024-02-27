// Hot Deals Section
const hotDealsSplide = new Splide("#hot-deals-day", {
  arrows: false,
  pagination: false,
  perPage: 2,
  perMove: 1,
  gap: 20,
  // autoplay:true,

  breakpoints: {
    576: {
      perPage: 1,
    },
  },

  breakpoints: {
    768: {
      perPage: 1,
    },
  },
});
hotDealsSplide.mount();

//timer1
const launchDate = new Date("2024-02-17T24:00:00");

function updateLaunchDate() {
  const currentTime = new Date().getTime();

  const time = launchDate - currentTime;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const countdownDays = document.getElementById("countdownDays2");

  const countdownHours = document.getElementById("countdownHours2");

  const countdownMins = document.getElementById("countdownMins2");

  const countdownSecs = document.getElementById("countdownSecs2");

  countdownDays.innerHTML = `${days}`;

  countdownHours.innerHTML = `${hours}`;

  countdownMins.innerHTML = `${minutes}`;

  countdownSecs.innerHTML = `${seconds}`;

  setInterval(updateLaunchDate, 1000);
}
updateLaunchDate();

//timer2
const launchDate2 = new Date("2024-02-27T22:32:00");

function updateLaunchDate2() {
  const currentTime = new Date().getTime();

  const time = launchDate2 - currentTime;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const countdownDays = document.getElementById("countdownDays");

  const countdownHours = document.getElementById("countdownHours");

  const countdownMins = document.getElementById("countdownMins");

  const countdownSecs = document.getElementById("countdownSecs");

  countdownDays.innerHTML = `${days}`;

  countdownHours.innerHTML = `${hours}`;

  countdownMins.innerHTML = `${minutes}`;

  countdownSecs.innerHTML = `${seconds}`;

  setInterval(updateLaunchDate2, 1000);
}
updateLaunchDate2();

//timer3
const launchDate3 = new Date("2024-02-12T24:00:00");

function updateLaunchDate3() {
  const currentTime = new Date().getTime();

  const time = launchDate2 - currentTime;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const countdownDays = document.getElementById("countdownDays3");

  const countdownHours = document.getElementById("countdownHours3");

  const countdownMins = document.getElementById("countdownMins3");

  const countdownSecs = document.getElementById("countdownSecs3");

  countdownDays.innerHTML = `${days}`;

  countdownHours.innerHTML = `${hours}`;

  countdownMins.innerHTML = `${minutes}`;

  countdownSecs.innerHTML = `${seconds}`;

  setInterval(updateLaunchDate3, 1000);
}
updateLaunchDate3();

// //timer4
const launchDate4 = new Date("2024-02-8T23:33:00");

function updateLaunchDate4() {
  const currentTime = new Date().getTime();

  const time = launchDate2 - currentTime;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const countdownDays = document.getElementById("countdownDays4");

  const countdownHours = document.getElementById("countdownHours4");

  const countdownMins = document.getElementById("countdownMins4");

  const countdownSecs = document.getElementById("countdownSecs4");

  countdownDays.innerHTML = `${days}`;

  countdownHours.innerHTML = `${hours}`;

  countdownMins.innerHTML = `${minutes}`;

  countdownSecs.innerHTML = `${seconds}`;

  setInterval(updateLaunchDate4, 1000);
}
updateLaunchDate4();
