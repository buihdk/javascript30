'use strict';

const playSound = e => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // rewind to the start
  audio.play();

  const key = document.querySelector(`.key[data-key=${e.key}]`);
  if (key.classList.contains('hidden')) { 
    key.style.visibility = 'visible';
    setTimeout(() => { key.style.visibility = 'hidden' }, 700);
  };
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', e => {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transform
  key.classList.remove('playing');
}));

const hiddenKeys = document.querySelectorAll('.hidden');
hiddenKeys.forEach(key => key.style.visibility = 'hidden');

document.addEventListener('keydown', playSound);