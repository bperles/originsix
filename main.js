/*abre e fecha menu quando clicar no icone: hambuger e x*/

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/*quando clicar em um item do menu, esconder o menu*/

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* mudar o header da pagina quando der scroll*/

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {

  if (window.scrollY >= navHeight) {
    //scroll é maior ou igual que a altura do header
    header.classList.add("scroll");
  } else {
    //scroll é menor que a altura do header
    header.classList.remove("scroll");
  }
}

/* Swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
  },

  mousewheel: true,

  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* ScrollReveal - Mostrar Elementos quando der Scroll */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .cards,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// Back to top Button

const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {

  if (window.scrollY >= 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}


/* Menu ativo conforme a seção da página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + ((window.innerHeight / 8) * 4)

  for (const section of sections)
  {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= (sectionTop + sectionHeight)

    if(checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')  
    } else  {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')  
    }

  }

}

// When Scroll

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection()
});


