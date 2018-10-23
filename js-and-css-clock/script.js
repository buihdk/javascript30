'use strict'; 

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const milisecondHand = document.querySelector('.milisecond-hand');

const setDate = () => {
  const now = new Date();
  // second hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // minute hand
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  // hour hand
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  // handle weird transition at 90 deg or 450 deg
  (secondsDegrees === 450 || secondsDegrees === 90) ? secondHand.classList.add('notransition') : secondHand.classList.remove('notransition');
  (minutesDegrees === 450 || minutesDegrees === 90) ? minuteHand.classList.add('notransition') : minuteHand.classList.remove('notransition');
  (hoursDegrees === 450 || hoursDegrees === 90) ? hourHand.classList.add('notransition') : hourHand.classList.remove('notransition');
  // add in milisecond hand
  const miliseconds = now.getMilliseconds();
  const milisecondsDegrees = ((miliseconds / 1000) * 360) + 90;
  milisecondHand.style.transform = `rotate(${milisecondsDegrees}deg)`;  
}

setInterval(setDate, 50);