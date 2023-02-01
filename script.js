function arithmetic(a, b, op) {
  var str1 = a + op + b;
  return eval(str1);
}
document.getElementById("demo1").innerHTML = arithmetic(8, 2, "+");
document.getElementById("demo2").innerHTML = arithmetic(8, 2, "-");
document.getElementById("demo3").innerHTML = arithmetic(8, 2, "*");
document.getElementById("demo4").innerHTML = arithmetic(8, 2, "/");

//simple Calculation
alert("Do addition of two numbers");
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));
let result = calculator(number1, number2);

function calculator(number1, number2) {
  return number1 + number2;
}

alert("The Ans Is " + result);

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
=======
let x;
let y = 182e5;
let z = 182e-5;
x = "Jigar"
let fullname = "jigar kalariya02" 
document.getElementById("demo1").innerHTML = x
document.getElementById("demo2").innerHTML = fullname;
//For concate
document.getElementById("demo3").innerHTML = x +" "+ fullname;
document.getElementById("demo4").innerHTML = y +"</br>"+ z;
//else if condition
var book = "maths";
if(book == "history"){
    document.getElementById("demo5").innerHTML = book;
}
else if ( book == "chemistry" ){
    document.getElementById("demo5").innerHTML = book;
}
else if ( book == "maths" ){
    document.getElementById("demo5").innerHTML = book;
}
else{
    document.getElementById("demo5").innerHTML = "Unknown Book";
}
//Switch Case
let a = 2;
switch (a) {
    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
document.getElementById("demo6").innerHTML = a;