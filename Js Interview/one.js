// remove falsy values from array
// 1. false
// 2. 0
// 3. null
// 4. undefined
// 5. blank
// 6. not a number

let miscellaneous = ['apple',false,'',NaN,0,undefined,'chillie',null,'','mango'];

// pass Boolean to array.filter() will remove falsy values from array
let fruits = miscellaneous.filter(Boolean);
console.log(fruits);

/*  EXPLANATION

->Boolean(expression) in JS returns true/false 
Boolean(5<6); true

*/ 