// know performance of a task
const startTime = performance.now();
for(let i=0;  i<=50; i++){
    console.log({i});
}
const endtime = performance.now();
console.log(`loop took ${endtime-startTime} miliseconds`)