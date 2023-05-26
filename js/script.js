"use strict";

window.addEventListener("DOMContentLoaded", () => {
  fix100vh();
  findHeight();
  animation();
  window.addEventListener("resize", () => {
    fix100vh();
    findHeight();
  });
});

let promo = document.querySelector(".promo");

function fix100vh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function findHeight() {
  let fullHeight = document.documentElement.clientHeight,
    fullWidth = document.documentElement.clientWidth;
  if (fullWidth > 768 && fullWidth <= 1024) {
    if (fullHeight < 730) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth > 576 && fullWidth <= 768) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  } else if (fullWidth <= 576) {
    if (fullHeight < 700) {
      promo.classList.add("no-full");
    } else {
      if (promo.classList.contains("no-full")) {
        promo.classList.remove("no-full");
      }
    }
  }
}

function animation() {
  //gsap.registerPlugin(ScrollTrigger);

  const tlPromo = gsap.timeline({});

  tlPromo
    .to(".promo__title span:first-child", {
      duration: 1.2,
      x: 0,
      ease: "back.out(1.1)",
    })
    .to(
      ".promo__title span:last-child",
      {
        duration: 1.2,
        x: 0,
        ease: "back.out(1.1)",
      },
      "<"
    );

  const tlImages = gsap.timeline({
    scrollTrigger: {
      trigger: ".promo",
      start: "top top",
      end: "+=50%",
      scrub: 1,
      pin: true,
    },
  });

  tlImages
    .to(".promo__bottom", {
      opacity: 1,
      y: 0,
    })
    .fromTo(
      ".promo__bottom img",
      { y: -80 },
      {
        y: 40,
      },
      "<"
    );

  const tlLines = gsap.timeline({
    scrollTrigger: {
      trigger: ".choose__wrap",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  tlLines
    .to(".choose__wrap .top", {
      xPercent: -60,
    })
    .to(
      ".choose__wrap .bottom",
      {
        xPercent: 20,
      },
      "<"
    );

  gsap.from(".rates-card", {
    stagger: 0.3,
    opacity: 0,
    yPercent: 100,
    scrollTrigger: {
      trigger: ".rates",
      start: "top 10%",
      toggleActions: "play none none reverse",
      markers: true,
    },
  });
}
