const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

const logText = (e) => {
  console.log(e.target.classList.value);
  e.stopPropagation();
};

divs.forEach(div => div.addEventListener('click', logText, { 
  capture: false 
}));

button.addEventListener('click', () => { 
  console.log('Click!!!');
}, { 
  once: true 
});