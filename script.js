//Local Scope 
function localscope(a, b)
{
    let result = a+b; // Local Scope Variable
    document.getElementById("demo1").innerHTML = result;
}
localscope(5,5)
let result = 555; // Globle Scope variable
document.getElementById("demo2").innerHTML = result;

//Globle scope
let message = "Hello World!"; // Globle Variable
function globlescop()
{
    message = "Good Morning";
}
document.getElementById("demo3").innerHTML = message; // This call Globle variable
globlescop();
document.getElementById("demo4").innerHTML = message; // This call function variable

//block scope
const addnumber = (n1,n2) =>{
    let res = n1+n2;
    document.getElementById("demo5").innerHTML = res;

    if(res != 9)
    {
        let res1 = "positive"; // this is block scope variable you can use it one time in function if you use it uot side the function then it show an error that Variable is Undefine.
        document.getElementById("demo6").innerHTML = res1;
    }
    document.getElementById("demo6").innerHTML = res1;
} 
addnumber(5,5);
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
