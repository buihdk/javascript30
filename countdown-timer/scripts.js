'use strict';

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const timer = (seconds) => {
  clearInterval(countdown); // clear any existing timers

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) { // check if we should stop it
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft); // display it
  }, 1000)
};

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
};

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const meridiem = hour > 12 ? 'PM' : 'AM';
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes} ${meridiem}`;
};

const startTimer = e => timer(parseInt(e.target.dataset.time));

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', e => {
  e.preventDefault();
  timer(e.target.minutes.value * 60);
  e.target.reset();
});