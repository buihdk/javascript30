'use strict';

const timeNodes = [...document.querySelectorAll('[data-time]')];

// add time to each video
timeNodes.map(node => node.innerHTML += `- ${node.dataset.time}`);

const calculate = () => {
  const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs; // secondsPerVid
  })
  .reduce((total, secondsPerVid) => total + secondsPerVid); // sum up all secondsPerVid

  let secondsLeft = seconds;

  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = seconds % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = seconds % 60;

  document.querySelector('span').innerHTML = `${hours} hours, ${mins} minutes, ${secondsLeft} seconds`;
}

document.querySelector('button').addEventListener('click', calculate);