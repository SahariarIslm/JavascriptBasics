// Javascript nuggets 

// for in Loop  - iterate over object properties
// not adjective to use it on arrays, especially if the order is important
// on aarrays use "for of" loop instead

const person = {
	name:'john',
	age:25,
	status:'student'
};

for (const propertyName in person){
	console.log(`${propertyName}:${person[propertyName]}`)
}