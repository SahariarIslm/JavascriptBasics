// what is the output of this beloww code?
function b(){
    console.log(`the length is ${this.length}`);
}
let a = {
    length:10,
    method:function(b){
        arguments[0]();
    }
}
a.method(b,5);