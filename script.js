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