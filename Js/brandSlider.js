'use strict';

// infinity slider
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');


let number = 0;
const totalSlide = slide.length;
const getSlidesPerView = function () {
  // if (window.innerWidth <= 576) return 3;
  // if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 992) return 5;
  return 6;
}


const goToSlide = function (num) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${(i - num) * 100}%)`
  })
}
goToSlide(0)

//moving
const nextSlide = function () {
  if (number === totalSlide - getSlidesPerView()) number = 0;
  else number++;
  goToSlide(number);
}
const preSlide = function () {
  if (number === 0) number = totalSlide - getSlidesPerView();
  else number--;
  goToSlide(number);
}
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', preSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  // else if (e.key === 'ArrowLeft') preSlide();
  e.key === 'ArrowLeft' && preSlide();
})