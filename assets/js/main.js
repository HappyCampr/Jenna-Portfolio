/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}
if (navClose) {
  navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) =>
  link.addEventListener("click", () => navMenu.classList.remove("show-menu"))
);

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  if (!header) return;
  window.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpEl = document.getElementById("scroll-up");
  if (!scrollUpEl) return;
  window.scrollY >= 350 ? scrollUpEl.classList.add("show-scroll") : scrollUpEl.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== CONTACT (basic validation placeholder) ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactMessage) return;

    contactMessage.textContent = "Thanks! Your message is ready to wire up to EmailJS.";
    setTimeout(() => (contactMessage.textContent = ""), 5000);

    contactForm.reset();
  });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "24px",
    duration: 900,
    delay: 120,
    reset: false,
  });

  sr.reveal(".home__data, .home__image", { interval: 120 });
  sr.reveal(".about__image, .about__data", { interval: 120 });
  sr.reveal(".skills__content, .skills__group", { interval: 120 });
  sr.reveal(".resume__card, .projects__card", { interval: 120 });
  sr.reveal(".contact__form", { interval: 120 });
}