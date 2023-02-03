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