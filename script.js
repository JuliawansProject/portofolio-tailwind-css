window.onscroll = function(){
    const header = this.document.querySelector(`header`)
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav){
        header.classList.add(`navbar-fixed`)
    } else {
        header.classList.remove(`navbar-fixed`)
    }
}

//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");

    const lines = hamburger.querySelectorAll(".hamburger-line");

    // Line 1 → rotate 45°
    lines[0].classList.toggle("rotate-45");
    lines[0].classList.toggle("origin-top-left");

    // Line 2 → hilang
    lines[1].classList.toggle("scale-0");

    // Line 3 → rotate -45°
    lines[2].classList.toggle("-rotate-45");
    lines[2].classList.toggle("origin-bottom-left");
});
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});