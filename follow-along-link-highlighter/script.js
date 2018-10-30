const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = e => {
  const linkCoords = e.target.getBoundingClientRect();
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${linkCoords.left + window.scrollX}px, ${linkCoords.top + window.scrollY}px)`;
  highlight.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
  highlight.style.borderBottomColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
};

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));