'use strict';

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const fixNav = () => {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);

const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = () => {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight - topOfNav) - (sliderImage.height / 2);
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if (isHalfShown && isNotScrolledPast) sliderImage.classList.add('active');
    else sliderImage.classList.remove('active');
  })
}

window.addEventListener('scroll', debounce(checkSlide, 10));