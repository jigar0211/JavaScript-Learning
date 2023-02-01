//print sum of 100 numbers
let b = 100;
let sum = 0;
for (let a= 0 ; a <= b; a++)
{
    sum = sum + a;
    console.log(sum);
}
//check prime number
const number = parseInt(prompt("Enter a positive number"));
let isprime = true;

if ( number === 1 ){
    alert("1 is neither prime nor composite number");
}
else if(number > 1)
{
    for (let i = 2; i < number; i++){
        if(number % i == 0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime)
    {
        alert(`${number} is a prime number`);
    }else {
        alert(`${number} is not a prime number`);
    }
}
//while loop 
console.log("while");
var j = 17;
while(j<=20)
{
    console.log(j);
    j++;
}

//do while loop
console.log("Do While");
var k=21;  
do{  
console.log(k);  
k++;  
}while (k<=30);  

//while loo example
var num = 1;
do{
    num += 1
    if(num % 2 == 0)
    {
        console.log(num);
    }
}while(num<=50)
//For-In Loop 
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;
function myFunction(value) {
  txt += value + "<br>"; 
}
//For-Of Loop
let language = "javascript"
let text = ""
for (let i of language){
    text += i + "<br>"
}
document.getElementById("demo1").innerHTML = text;
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