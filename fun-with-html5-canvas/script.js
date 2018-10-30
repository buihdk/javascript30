'use strict';

const text = document.querySelector('span');

const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'luminosity';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = e => {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start from
  ctx.lineTo(e.offsetX, e.offsetY); // go to
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) hue = 0;
  if (ctx.lineWidth >= 75 || ctx.lineWidth <= 1) direction = !direction;
  if (direction) ctx.lineWidth++;
  else ctx.lineWidth--;
  text.style.setProperty('color', `hsl(${hue}, 100%, 60%)`);
  text.style.setProperty('border-color', `hsl(${hue}, 100%, 60%)`);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => { isDrawing = true; [lastX, lastY] = [e.offsetX, e.offsetY]; });
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);