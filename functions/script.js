function arithmetic(a, b, op) {
  var str1 = a + op + b;
  return eval(str1);
}
document.getElementById("demo1").innerHTML = arithmetic(8, 2, "+");
document.getElementById("demo2").innerHTML = arithmetic(8, 2, "-");
document.getElementById("demo3").innerHTML = arithmetic(8, 2, "*");
document.getElementById("demo4").innerHTML = arithmetic(8, 2, "/");

//simple Calculation
// alert("Do addition of two numbers");
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));
// let result = calculator(number1, number2);

// function calculator(number1, number2) {
//   return number1 + number2;
// }

// alert("The Ans Is " + result);

//onclick event function
function sayHello() {
  document.write("Hello There");
}
//Arrow Function
function person() {
  this.name = "jigar";
  this.age = 20;
  this.subfunction = function () {
    let innerfunc = () => {
      document.getElementById("demo5").innerHTML = this.name;
      document.getElementById("demo6").innerHTML = this.age;
    };
    innerfunc();
  };
}
const j = new person();
j.subfunction();
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