// let p = new Promise((resolve, reject) =>{
//     let a = 1 + 1; //if condition is not true then it will print catch message
//     if(a == 2){
//         resolve('Success')
//     } else{
//         reject('Failed')
//     }
// })
// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) =>{
//     console.log('This is in the then ' + message)
// })

//Promise Example
// const userleft = false 
// const userwatch = true
// function watchtutorialpromise(){
//     return new Promise((resolve, reject) => {
//         if (userleft){
//             reject({
//                 name: 'User Left',
//                 message: ':('
//             })
//     }else if(userwatch){
//         reject({
//             name:'User Watching Videos',
//             message: ''
//         })
//     }else{
//         resolve('Thumbs up')
//     }
// })
// }

// watchtutorialpromise().then((message)=>{
//     console.log('Success: '+ message)
// }).catch((error)=>{
//     console.log(error.name + ' ' + error.message)
// })

//Promise simple program
const promiseOne = new Promise((resolve, reject) => {
    resolve('Promise One Record')
})

const promiseTwo = new Promise((resolve, reject) =>{
    resolve('Promise Two Record')
})

const promiseThree = new Promise((resolve, reject) =>{
    resolve('Promise Three Record')
})

Promise.all([
    promiseOne,
    promiseTwo,
    promiseThree
]).then((message) => {
    console.log(message)
})
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