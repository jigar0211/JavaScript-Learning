const colorsarr = ["red", "blue", "white"];
localStorage.setItem('colors', JSON.stringify(colorsarr));

const numberarr = [1,2,3]
localStorage.setItem('numbers',JSON.stringify(numberarr));


const colordata = JSON.parse(localStorage.getItem('colors'));
console.log(colordata);

const numbersdata = JSON.parse(localStorage.getItem('numbers'));
console.log(numbersdata);
// clear local storage
//localStorage.clear();