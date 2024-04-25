const titulo = document.querySelector(".titulo-principal");

function TimeSleep() {
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        elemento.innerHTML += letra;
      }, 135 * i);
    });
  }
  typeWrite(titulo);
  setTimeout(TimeSleep, 6000);
}

TimeSleep();

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

const btnVoltarTopo = document.querySelector('.btn-voltar-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnVoltarTopo.style.display = 'block';
  } else {
    btnVoltarTopo.style.display = 'none';
  }
});

btnVoltarTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

ScrollReveal().reveal('.experiencia',{ 
  origin: 'top',  
  duration: 2000, 
  distance: '100px',
  delay: 600,
  useDelay: 'always',
  reset: true,
}, 
);

ScrollReveal().reveal('.formacao-container',{ 
  origin: 'top',  
  duration: 2000, 
  distance: '100px',
  delay: 600,
  delayOnEnter: true,
  reset: true,
}, 
);

ScrollReveal().reveal('.projeto',{ 
  origin: 'down',  
  duration: 2000, 
  distance: '100px',
  delay: 600,
  delayOnEnter: true,
  reset: true,
}, 
);

const imgs = document.getElementById('img1');
const img =  document.querySelectorAll("#img1 img")

let idx = 0

function carrossel (){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 15000);