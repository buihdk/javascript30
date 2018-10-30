const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = (e) => {
  console.log(e.target);
};

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));