// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

console.log('inventors: ', inventors);
console.log('people: ', people);

// Array.prototype.filter()
console.log("1. Filter the list of inventors for those who were born in the 1500's");
console.log('ANSWER: ');
console.table(inventors.filter(inventor => 1500 <= inventor.year && inventor.year < 1600));

// Array.prototype.map()
console.log("2. Give us an array of the inventors' first and last names");
console.log('ANSWER: ');
console.log(inventors.map(inventor => `${inventor.first} ${inventor.last}`));

// Array.prototype.sort()
console.log("3. Sort the inventors by birthdate, oldest to youngest");
console.log('ANSWER: ');
console.table(inventors.sort((inventor1, inventor2) => inventor1.year - inventor2.year));

// Array.prototype.reduce()
console.log("4. How many years did all the inventors live?");
console.log('ANSWER: ');
console.log(inventors.reduce((accumulator, inventor) => accumulator + (inventor.passed - inventor.year), 0))

console.log("5. Sort the inventors by years lived");
console.log('ANSWER: ');
console.table(inventors.sort((inventor1, inventor2) => (inventor2.passed - inventor2.year) - (inventor1.passed - inventor1.year)));

console.log("6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name");
console.log("Use this URL: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris");
console.log('ANSWER: ');
console.log("Go to the URL and then run the below code in the browser console: ");
console.log("const category = document.querySelector('.mw-category');");
console.log("const links = [...category.querySelectorAll('a')]; // use spread to change nodelist to array");
console.log("const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));");

// Sort Exercise
console.log("7. Sort the people alphabetically by last name");
console.log('ANSWER: ');
console.log(people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
}));

// Reduce Exercise
console.log("8. Sum up the instances of each of these");
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
console.log('data: ', data);
console.log('ANSWER: ');
console.log(data.reduce((accumulator, currentValue) => {
  if(!accumulator[currentValue]) accumulator[currentValue] = 0;
  accumulator[currentValue]++;
  return accumulator;
}, { car: 0, walk: 0, truck: 0 }));