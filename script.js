function mydisplay(some)
{
    document.getElementById("demo1").innerHTML = some;
}
async function myfunction(){ return "Hello" }
myfunction().then(
    function(value) {mydisplay(value);},
    function(error) {mydisplay(error);}
);