'use strict';

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener('click', e => {
  if (!e.detail || e.detail == 1) panel.classList.toggle('open');
}));
panels.forEach(panel => panel.addEventListener('transitionend', e => {
  if (e.propertyName.includes('flex')) panel.classList.toggle('open-active');
}));