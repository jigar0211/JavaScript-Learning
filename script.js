//addition number with closer
function addnumber(firstnumber, secondnumber) {
  var resultValue = "Result is : ";
  function add() {
    return resultValue + (firstnumber + secondnumber);
  }
  return add;
}
var myfunction = addnumber(20, 80);
var result = myfunction();
document.getElementById("demo").innerHTML = result;

//Click Counter
var incrementclickcount = (function()
{
    var counter = 0;
    return function()
    {
        return ++counter;
    }
})();
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