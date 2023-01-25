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