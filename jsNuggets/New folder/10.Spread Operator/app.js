// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john','peter','bob'];
const girls = ['susan','anna'];
const bestFriend = 'arnold';

const friends = [...boys,...girls,bestFriend];
console.log(friends);
//reference
// const newFriends = friends;
// newFriends[0] = 'nancy';
// console.log(friends);
// console.log(newFriends);


//copy
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

//ES2018 - ES8 Objeccts
const person = {name: 'john', job:'developer'};
const newPerson = {...person,city:'chicago',name:'peter'};
console.log(person);
console.log(newPerson);