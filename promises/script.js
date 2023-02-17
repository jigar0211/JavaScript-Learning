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
// const promiseOne = new Promise((resolve, reject) => {
//     resolve('Promise One Record')
// })

// const promiseTwo = new Promise((resolve, reject) =>{
//     resolve('Promise Two Record')
// })

// const promiseThree = new Promise((resolve, reject) =>{
//     resolve('Promise Three Record')
// })

// Promise.all([
//     promiseOne,
//     promiseTwo,
//     promiseThree
// ]).then((message) => {
//     console.log(message)
// })
//Primise Race example
let p1 = Promise.reject(111);
let p2 = Promise.resolve(222);
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 333);
});
Promise.race([p1, p2, p3]) //This will print Failed 111
  // Promise.race([p2, p1, p3]) //This will print Winning 222
  // Promise.race([p3, p2, p1]) //This will print Winning 222
  .then((result) => {
    console.log("Winning", result);
  })
  .catch((result) => {
    console.log("Failed", result);
  });
//Primise Race example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});
Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
//Promise.all Example
const pro1 = Promise.resolve(3);
const pro2 = 42;
const pro3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([pro1, pro2, pro3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"] 