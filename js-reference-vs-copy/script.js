// start with strings, numbers and booleans
let age = 39;
let age2 = age;
console.log('let age2 = age;');
console.log('age:', age, 'age2:', age2);
age = 45;
console.log('age:', age, 'age2:', age2);
console.log('----------------------------');

let name = 'Khoa';
let name2 = name;
console.log('let name2 = name;');
console.log('name:', name, 'name2:', name2);
name = 'Bui';
console.log('name:', name, 'name2:', name2);
console.log('----------------------------');

let isOld = true;
let isOld2 = isOld;
console.log('let isOld2 = isOld;');
console.log('isOld:', isOld, 'isOld2:', isOld2);
isOld = false;
console.log('isOld:', isOld, 'isOld2:', isOld2);
console.log('----------------------------');

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.warn('const team = players;');
console.log(
  'players:', players, '\n',
  'team:', team
);
console.log('----------------------------');

// You might think we can just do something like this:
team[3] = 'Lux';
console.log('team[3] = "Lux";');

// however what happens when we update that array?
// now here is the problem!
console.log(
  'players:', players, '\n',
  'team:', team
);
console.log('----------------------------');

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
console.warn('const team2 = players.slice();');
players[3] = 'Khoa';
console.log('players[3] = "Khoa";');
console.log(
  'players:', players, '\n',
  'team:', team, '\n',
  'team2:', team2
);
console.log('----------------------------');

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.warn('const team3 = [].concat(players);');

// or use the new ES6 Spread
const team4 = [...players];
console.warn('const team4 = [...players];');
// or use Array.from() method
const team5 = Array.from(players);
console.warn('const team5 = Array.from(players);');
// now when we update it, the original one isn't changed
players[3] = 'Bui';
console.log('players[3] = "Bui";');
console.log(
  'players:', players, '\n',
  'team:', team, '\n',
  'team2:', team2, '\n',
  'team3:', team3, '\n',
  'team4:', team4, '\n',
  'team5:', team5
);
console.warn('team is an array reference of players');
console.warn('team2, team3, team4, and team5 are array copies of players');
console.log('----------------------------');

// The same thing goes for objects, let's say we have a person object
const person = { name: 'Khoa Bui', age: 40 };
console.log('person', person);

// and think we make a copy:
const person2 = person;
console.warn('const person2 = person;');
person2.age = 99;
console.log('person2.age = 99;');
console.log(
  'person', person, '\n',
  'person2', person2
);

// how do we take a copy instead?
const person3 = Object.assign({}, person, { age: 88, number: 101 });
console.warn('const person3 = Object.assign({}, person, { age: 88, number: 101 });');
person3.age = 1;
console.log('person3.age = 1;');
console.log(
  'person', person, '\n',
  'person2', person2, '\n',
  'person3', person3
);

// We will hopefully soon see the object ...spread
const person4 = { ...person, number: 111, type: 'object spread' };
console.warn('const person4 = { ...person, number: 111, type: "object spread" };')
person4.age = 10;
console.log('person4.age = 10;');
console.log(
  'person', person, '\n',
  'person2', person2, '\n',
  'person3', person3, '\n',
  'person4', person4
);
console.warn('person2 is an object reference of players');
console.warn('person3 and person4 are object copies of players');
console.log('----------------------------');

console.warn('WARNING: Assign and Spread method is only 1 level deep for both Arrays and Objects');
console.warn('WARNING: Use _.cloneDeep() or JSON.stringify() for multiple level deep instead!');
const khoa = {
  name: 'Khoa',
  age: 40,
  social: {
    twitter: '@buihdk',
    github: 'buihdk'
  }
};
console.log('khoa', khoa);
const khoa2 = Object.assign({}, khoa);
console.log('const khoa2 = Object.assign({}, khoa);');
khoa2.age = 20;
console.log('khoa2.age = 20;');
khoa2.social.twitter = 'khoa';
console.log('khoa2.social.twitter = "khoa";');
console.log(
  'khoa', khoa, '\n',
  'khoa2', khoa2
);
console.warn('social.twitter has been changed in both object!!');
const khoa3 = { ...khoa };
console.log('const khoa3 = { ...khoa };');
khoa3.social.twitter = 'khoa3';
console.log('khoa3.social.twitter = "khoa3";');
console.log(
  'khoa', khoa, '\n',
  'khoa2', khoa2, '\n',
  'khoa3', khoa3
);
console.warn('Object spread also does not work!!');
// A workaround
const khoa4 = JSON.parse(JSON.stringify(khoa));
console.log('const khoa4 = JSON.parse(JSON.stringify(khoa));');
khoa4.social.twitter = 'khoa4';
console.log('khoa4.social.twitter = "khoa4";');
console.log(
  'khoa', khoa, '\n',
  'khoa2', khoa2, '\n',
  'khoa3', khoa3, '\n',
  'khoa4', khoa4
);
console.warn('JSON.stringify() or _.cloneDeep() works!');