
document.addEventListener("DOMContentLoaded", function(){
  // handle cloud
  const cloud = document.querySelector('.cloud');
  const img = document.querySelector('img');
  function handleCloud() {
    cloud.style.height = img.offsetHeight + 'px';
    cloud.style.width = img.offsetWidth + 'px';
    cloud.style.left = img.getBoundingClientRect().left = 'px';
    cloud.style.top = img.getBoundingClientRect().top = 'px'; 
  }

  // handle inputs
  const inputs = document.querySelectorAll('.controls input');
  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    handleCloud();
  }
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

  handleCloud();
});