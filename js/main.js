// Swiper
var swiper = new Swiper(".populares-content", {
    slidesPerView: 2,
    spaceBetween: 10,
    // centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{ //https://codepen.io/ismail9k/pen/BaLYeMa
        920 :{
            slidesPerView: 1,
        }
    }
  });
//Mostrar Video
let playButton = document.querySelector('.play-filme');
let video = document.querySelector('.video-container');
let closebtn = document.querySelector('.fechar-video');

playButton.onclick = (function(){
    video.classList.add('mostrar-video');
});
closebtn.onclick = (function(){
    video.classList.remove('mostrar-video');
});


