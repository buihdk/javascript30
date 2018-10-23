'use strict';

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
    // distance from the windowTop to half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    // distance from the imageBottom to the windowTop
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // make sure that slideInAt's ditance > distance from windowTop to imageTop
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // make sure that the when scrolling, the scrollY is less than imageBottom's 
    // distance for the image to be 'active'
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if (isHalfShown && isNotScrolledPast) sliderImage.classList.add('active');
    else sliderImage.classList.remove('active');
  })
}

window.addEventListener('scroll', debounce(checkSlide, 10));