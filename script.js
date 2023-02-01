// object creation
const intro = { 
    /*KEY->*/name: 'KALARIYA JIGAR',
    age: 20/*<-VALUE*/ 
};
console.log(typeof intro); // show object type
console.log(intro.name);
console.log(intro["age"]); //Using bracket Notation

//nested objects
const student = {
    name:"jigar",
    age:20,
    marks: {
        maths:70,
        science:80,
    }
}
console.log(student.marks);
console.log("marks in Science")
console.log(student.marks.science);

//call function in object
const demo ={
    name:"jigar",
    greet: function(){
        console.log('hello')
    }
}
demo.greet();

//Arrays
console.log("Arrays Srarts from here")
//empty array
const list = [];
console.log(list);
//Array of numbers
const numberarr = [1,2,3,4,5,6,7,8,9,0];
console.log(numberarr);
console.log(numberarr[2]) // access elements
console.log(numberarr[5]) // access elements
//Array of String
const arrstring = ["jigar","kalariya"];
console.log(arrstring);
//mixes type array
const newdata = ["jiagr",20,true];
newdata.push('kalariya'); // add element on array
newdata.unshift('hello'); // add element at the beginning of the array
newdata[2] = "cahnged"; // To change element of array
//newdata.pop(); // to remove last element
//newdata.shift(); // to remove first element
console.log(newdata);
console.log(newdata.length); // Shoes the length
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