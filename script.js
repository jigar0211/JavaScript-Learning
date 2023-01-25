//print sum of 100 numbers
let b = 100;
let sum = 0;
for (let a= 0 ; a <= b; a++)
{
    sum = sum + a;
    console.log(sum);
}
//check prime number
const number = parseInt(prompt("Enter a positive number"));
let isprime = true;

if ( number === 1 ){
    alert("1 is neither prime nor composite number");
}

else if(number > 1)
{
    for (let i = 2; i < number; i++){
        if(number % i == 0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime)
    {
        alert(`${number} is a prime number`);
    }else {
        alert(`${number} is not a prime number`);
    }
}

//while loop 
console.log("while");
var j = 17;
while(j<=20)
{
    console.log(j);
    j++;
}

//do while loop
console.log("Do While");
var k=21;  
do{  
console.log(k);  
k++;  
}while (k<=30);  