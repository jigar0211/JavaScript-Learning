//FIrst example
let text =
  '{"employees":[' +
  '{"firstName":"Jigar","lastName":"Kalariya" },' +
  '{"firstName":"Prashant","lastName":"Patel" },' +
  '{"firstName":"Vipul","lastName":"Chandravadiya" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
  obj.employees[0].lastName + " " + obj.employees[0].firstName;
//Second Example
const meJson = `
{
    "name": "Jigar",
    "age":20,
    "graduated":true,
    "favouritecolor":[
        "Skyblue",
        "NeavyBlue"
    ]
}`;
const me = JSON.parse(meJson);
console.log(me);
console.log(me.name);
console.log(me.age);
console.log(me.graduated);
console.log(me.favouritecolor);
//Third Example using JSON.stringify
const car = {
    make: "Honda",
    model: "Civik"
};
const cars = JSON.stringify(car);
console.log(cars);