'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked; 

const handleCheck = e => {
  // check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if (inBetween) checkbox.checked = true;
    })
  } 
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));