// Set object - stores a collection of unique values of any type

// new set()
// add(value)
// delete(value)
// clear()
// has(value)


// iterators
// entries(),keys(),values(),forEach()

const unique = new Set();
const random = 'third';

unique.add('first');
unique.add('second');
unique.add('third');
unique.add(random);
unique.add('fourth');
unique.add(4);

// const result = unique.delete('third')
// console.log(result);

// const result = unique.delete('five')
// console.log(result);

const isValue = unique.has(4)
console.log(isValue)

console.log(unique);