window.onload = function () {
  const mobileMenu = document.querySelector("#mobile-menu");
  const itemList = document.querySelector("#nav-wrapper");
  mobileMenu.addEventListener("click", function () {
    itemList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  var elements = document.getElementsByClassName("opener");
  var handleClick = function (event) {
    event.preventDefault();
    const el = this.closest(".has-sub");
    el.classList.toggle("open");
  };

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", handleClick);
  }

  //About faqs-list
  const listItems = document.querySelectorAll(".list-item");

  // Add click event listener to each header
  listItems.forEach((listItem) => {
    const description = listItem.querySelector(".description");

    listItem.addEventListener("click", () => {
      console.log("clicked");
      if (description.classList.contains("active")) {
        description.classList.remove("active");
      } else {
        description.classList.add("active");
      }
    });
  });

  // window.addEventListener("scroll", function () {
  //   if (window.pageYOffset >= 50) {
  //     // If page is scrolled more than 50px
  //     document.getElementById("return-to-top").style.display = "block"; // Show the arrow
  //   } else {
  //     document.getElementById("return-to-top").style.display = "none"; // Hide the arrow
  //   }
  // });

  // document
  //   .getElementById("return-to-top")
  //   .addEventListener("click", function () {
  //     // When arrow is clicked
  //     window.scrollTo({
  //       top: 0, // Scroll to top of the page
  //       behavior: "smooth", // Smooth scrolling behavior
  //     });
  //   });

  // gsap.registerPlugin(ScrollTrigger);
  // document.addEventListener("DOMContentLoaded", function () {
  //   paths = [...document.querySelectorAll(".line:not(.reverse) svg")];
  //   paths.forEach((el) => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       })
  //       .from(el, {
  //         ease: "none",
  //         rotate: 90,
  //       })
  //       .to(el, {
  //         ease: "none",
  //         rotation: 0,
  //       });
  //   });

  //   paths2 = [...document.querySelectorAll(".line.reverse svg")];
  //   paths2.forEach((el) => {
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       })
  //       .from(el, {
  //         ease: "none",
  //         rotate: 0,
  //       })
  //       .to(el, {
  //         ease: "none",
  //         rotation: 90,
  //       });
  //   });

  //   arrows = [...document.querySelectorAll(".anim-arrow path")];
  //   arrows.forEach((el) => {
  //     const svgEl = el.closest("svg");

  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: el.closest("svg"),
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true,
  //         },
  //       })
  //       .to(el, {
  //         ease: "none",
  //         strokeDashoffset: 50,
  //       });
  //   });
  // });
};
