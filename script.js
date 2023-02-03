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
//parse a JSON object
console.log('parse a JSON object Belowed :')

let jsonData = `{ 
  "name": "Jigar Kalariya",
  "age": 20,
  "hobbies": [ "reading", "traveling", "swimming" ],
  "address": { "city": "Ahmedabad",
               "state": "Gujarat" }}`;

let user = JSON.parse(jsonData);

console.log("Name: " + user.name);
console.log("Age: " + user.age);
console.log("Hobbies: " + user.hobbies);
console.log("Address: " + user.address.city + ", " + user.address.state);
//here's an example of how you can convert a JavaScript object to a JSON string
console.log('example of how you can convert a JavaScript object to a JSON string')
let detail = {
  name: "jigar",
  age: 20,
  hobbies: ["reading", "traveling", "sweeming"],
  address: {
    city:"Ahmedabad",
    state:"Gujarat"
  }
};
let object = JSON.stringify(detail);
console.log(object);