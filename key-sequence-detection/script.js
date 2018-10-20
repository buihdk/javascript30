const pressed = [];
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightab';
const hiddenText = document.querySelector('.hidden-text');

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-11, pressed.length - 10); // -konamiCode.length - 1, pressed.length - konamiCode.length
  if(pressed.join('').includes(konamiCode)) {
    cornify_add();
    hiddenText.style.visibility = 'visible';
    setTimeout(() => { hiddenText.style.visibility = 'hidden' }, 1000);
  }
})