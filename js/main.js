window.addEventListener("scroll", function () {
  let header = document.querySelector("header.lg");
  if (window.scrollY > 50) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
});

window.addEventListener("scroll", function () {
  let desktopHeader = document.querySelector("header.lg");
  let mobileHeader = document.querySelector("header.sm");

  if (window.scrollY > 50) {
    desktopHeader.classList.add("header-fixed");
    mobileHeader.classList.add("header-fixed");
  } else {
    desktopHeader.classList.remove("header-fixed");
    mobileHeader.classList.remove("header-fixed");
  }
});
