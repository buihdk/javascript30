'use strict';

// ## Array Cardio Day 2
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

console.log('people: ', people);
console.log('comments: ', comments);

// Some and Every Checks
// Array.prototype.some() 
console.log('Is at least one person 19 or older?');
console.log('ANSWER: ');
console.log(people.some(person => (new Date()).getFullYear() - person.year >= 9));
// Array.prototype.every() 
console.log('Is everyone 19 or older?');
console.log('ANSWER: ');
console.log(people.every(person => (new Date()).getFullYear() - person.year >= 9));

// Find is like filter, but instead returns just the one you are looking for
// Array.prototype.find()
console.log('Find the comment with the ID of 823423');
console.log('ANSWER: ');
console.log(comments.find(comment => comment.id === 823423));
// Array.prototype.findIndex()
console.log('Find the comment index with this ID');
console.log('ANSWER: ');
console.log(comments.findIndex(comment => comment.id === 823423));
console.log('Delete the comment with the ID of 823423');
console.log('ANSWER: ');
const deletedCommentIndex = comments.findIndex(comment => comment.id === 823423);
const newComments = [...comments.slice(0,deletedCommentIndex), ...comments.slice(deletedCommentIndex + 1)];
console.log(newComments);