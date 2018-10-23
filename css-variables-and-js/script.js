'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // handle cloud
  const cloud = document.querySelector('.cloud');
  const img = document.querySelector('img');
  const handleCloud = () => {
    cloud.style.height = img.offsetHeight + 'px';
    cloud.style.width = img.offsetWidth + 'px';
    // cloud.style.left = img.getBoundingClientRect().left + 'px';
    // cloud.style.top = img.getBoundingClientRect().top + 'px'; 
  };

  // handle inputs
  const inputs = document.querySelectorAll('.controls input');
  const handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
    handleCloud();
  };
  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  handleCloud();
});