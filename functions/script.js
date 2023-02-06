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
console.log('Pass By refreance Example :')
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
//Arrow function
let sample = () => console.log("Good Morning");
sample();
//dynamic arrow function
let age = 20;
let wellcome = (age < 20) ? () =>
    console.log("Baby") : 
    () => console.log("Adult");
wellcome();
//this with arrow function
function person2() {
    this.name = "jigar",
    this.age = 20,
    this.sayName = function () {
      console.log(this.age);
      function innerFunc() {
        //this refer Global Objects
        console.log(this.age);
        console.log(this);
      }
      innerFunc();
    };
}
let x = new person2();
x.sayName();
console.log('Hello')
console.log('goodmorning')