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