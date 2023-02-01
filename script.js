function mydisplay(some)
{
    document.getElementById("demo1").innerHTML = some;
}
async function myfunction(){ return "Hello" }
myfunction().then(
    function(value) {mydisplay(value);},
    function(error) {mydisplay(error);}
);

//Example of async and await
function makereq(location){
    return new Promise((resolve, reject) => {
        if(location === 'Google'){
            resolve('Google says Hii')
        }else{
            reject('We can only talk to Google')
        }
    })
}
function processreq(response){
    return new Promise((resolve, reject) =>{
        console.log('Processing Response')
        resolve(`Extra Information + ${response}`)
    })
}
async function dowork(){
 try{
    const response = await makereq('Google')
    console.log('Response Received')
    const processedResponse = await processreq(response)
    console.log(processedResponse)
 } catch(err) {
    console.log(err)
 }
}
dowork()
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