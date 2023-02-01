// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Grandparent Capture");
//   },
//   { capture: true }
// );
// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent Bubble");
// });
// parent.addEventListener(
//     "click",
//     (e) => {
//         e.stopPropagation();
//       console.log("parent Capture");
//     },
//     { capture: true }
//   );
// parent.addEventListener("click", () =>{
//     console.log("Hi")
// });
// setTimeout(() => {
//   parent.addEventListener("click", (e) => {
//     console.log("parent Bubble");
//   });
// }, 2000);
// child.addEventListener(
//     "click",
//     (e) => {
//       console.log("child Capture");
//     },
//     { capture: true }
//   );
// child.addEventListener("click", (e) => {
//   console.log("child Bubble");
//   //   e.stopPropagation();
// });


const divs = document.querySelectorAll('div')
// divs.forEach(div => {
//     div.addEventListener("click", () => {
//         console.log('Hi')
//     })
// })

// document.addEventListener("click", "div", e => {
    // if(e.target.matches("div")){
        // console.log("Hi")
    // }
// })

addGlobalEventListener("click", "div", e => {
    // if(e.target.matches("div")){
        console.log("Hi")
    // }
})

function addGlobalEventListener(type, selector, callback)
{
    document.addEventListener(type, e => {
        if(e.target.matches(selector)) callback(e)
    })
}
const newDiv = document.createElement("div") //new div
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)
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