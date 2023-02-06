console.log('Pass By Value Example :')
//Pass By Value Example
function passbyvalue(a, b){
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass By value 
    Function -> a = ${a} b = ${b}`);
}
let a = 1;
let b = 2;
console.log(`Before calling Pass by Value 
Function -> a = ${a} b = ${b}`);
passbyvalue(a, b);
console.log(`After calling Pass by Value 
Function -> a = ${a} b = ${b}`);
//Pass By Reference Example
console.log('Call By refreance Example :')
function passbyrefrence(obj){
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
    console.log(`Inside Pass By Refrence
    FUnction -> a = ${obj.a} b = ${obj.b}`);
}
let obj = {
    a:10,
    b:20
}
console.log(`Before calling Pass by Value 
Function -> a = ${obj.a} b = ${obj.b}`);
passbyrefrence(obj)
console.log(`After calling Pass by Value 
Function -> a = ${obj.a} b = ${obj.b}`);