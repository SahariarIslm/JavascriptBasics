// compare two arrays by values
const hasSameElements = (a,b) => {
    return a.length === b.length && a.every((v,i) => v===b[i]);
}
console.log(hasSameElements([1,2],[1,22]))