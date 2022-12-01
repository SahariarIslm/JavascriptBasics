// comma operator

let x = 1;
x = (x++,x,x+8);

let a = [[1,2,3,4],[3,4,5],[5,6],[7]];
for(let i=0, j=3; i<=3; i++,j--){
    console.log("a[" + i + "][" + j + "] = " + a[i][j]);
}