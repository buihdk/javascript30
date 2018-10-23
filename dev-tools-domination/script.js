'use strict';

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

const makeGreen = () => {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello World!');

// Interpolated
console.log(`My favorite dishes are: ${'\u{1F363}'} ${'\u{1F354}'} ${'\u{1F362}'}`);

// Styled
console.log('This is %cmy stylish message', 'color: yellow; font-style: italic; background-color: blue; padding: 2px; text-shadow: 2px 2px #FF0000;');

// warning!
console.warn(`Warning: Girl geek and Gamer at work! Those who interrupt will be fed to ${'\u{1F47B}'}`);

// Error :|
console.error('Err... Congratulations, you broke the Internet!');

// Info
console.info('Banging your head against a wall for one hour burn 150 calories.');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong! Men to the left because women are always right!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Viewing data in table format 
console.table(dogs);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`Khoa is a ${'\u{1F192}'} guy!`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.groupCollapsed(`Khoa Bui ${'\u{1F502}'}`);
console.count('Bui');
console.count('Bui');
console.count('Khoa');
console.count('Khoa');
console.count('Bui');
console.count('Khoa');
console.count('Bui');
console.count('Khoa');
console.count('Khoa');
console.count('Khoa');
console.groupEnd(`Khoa Bui ${'\u{1F502}'}`);

// timing
console.time('fetching data');
fetch('https://api.github.com/users/buihdk')
  .then(data => data.json())
  .then(data => { console.timeEnd('fetching data'); console.log(data); });