// Rest Operator...
// gather/collect items
// destructing, functions
// placement important, careful with the same name 
// rest when declare function, spread when invoke the function

// array 
const fruits=['apple','orange','lemon','banana'];
const [first,second,...restOfTheFruits] = fruits; // '...rest' - means collecting rest of the items in an array
console.log(first,restOfTheFruits);
const specificFruit=restOfTheFruits.find((fruit)=>{fruit==='lemon'});
console.log(specificFruit);


// objects
const person={name:'john',lastName:'smith',job:'developer'};
// const {...rest,job} = person;
const {job, ...rest}=person;
console.log(job,rest);

// functions
const getAverage = (name,...scores)=>{
	console.log(name);
	console.log(scores);
	const average = scores.reduce((total,item)=>{return total+=item},0)/scores.length;
	console.log(average);
}
// getAverage(person.name,89,654,687,654,654,684)
const testScores = [23,45,67,89];
getAverage(person.name,...testScores)