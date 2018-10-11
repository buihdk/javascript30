// set cloud
const cloud = document.querySelector('.cloud');
const img = document.querySelector('img');
function handleCloud() {
  cloud.style.height = img.offsetHeight + 'px';
  cloud.style.width = img.offsetWidth + 'px';
  cloud.style.left = img.getBoundingClientRect().left = 'px';
  cloud.style.top = img.getBoundingClientRect().top = 'px';  
}

// set inputs
const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  handleCloud();
}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

handleCloud();