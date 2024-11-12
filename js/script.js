
const carouselImages = document.querySelectorAll('.inicio .carousel-item img');


function changeImageSource() {
  if (window.innerWidth >= 576) {
    carouselImages[0].src = 'img/publicidad/9 GOTA ROJA.jpg';
    carouselImages[1].src = 'img/publicidad/7 GOTA ROJA.jpg';
    carouselImages[2].src = 'img/publicidad/6 GOTA ROJA.jpg';
  } else {
    carouselImages[0].src = 'img/publicidad/12 GOTA ROJA.jpg';
    carouselImages[1].src = 'img/publicidad/5 GOTA ROJA.jpg';
    carouselImages[2].src = 'img/publicidad/3 GOTA ROJA.jpg';
  }
}


window.addEventListener('load', changeImageSource);
window.addEventListener('resize', changeImageSource);