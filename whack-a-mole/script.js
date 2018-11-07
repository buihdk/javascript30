const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const timerDisplay = document.querySelector('.timer-display');
let lastHole;
let timeUp = true;
let score = 0;
let countdown;

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomHole = (holes) => {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole(holes);
  lastHole = hole;
  return hole;
};

const peep = () => {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
};

const bonk = (e) => {
  if (!e.isTrusted) return; // cheater
  score++;
  e.target.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

const displayTimeLeft = (seconds) => timerDisplay.textContent = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;

const timer = (seconds) => {
  clearInterval(countdown);
  const now = Date.now();
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((now + seconds * 1000 - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000)
};

const startGame = () => {
  scoreBoard.textContent = 0;
  score = 0;
  timeUp = false;
  peep();
  setTimeout(() => timeUp = true, 15000);
  timer(15);
};