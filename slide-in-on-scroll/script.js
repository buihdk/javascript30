function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  console.log(window.scrollY);
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