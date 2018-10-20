const pressed = [];
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
const hiddenText = document.querySelector('.hidden-text');

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);

  if (pressed.length > 10) pressed.shift();

  if (pressed.join('').includes(konamiCode)) {
    hiddenText.style.visibility = 'visible';
    setTimeout(() => { hiddenText.style.visibility = 'hidden' }, 1000);
    cornify_add();
  }
})