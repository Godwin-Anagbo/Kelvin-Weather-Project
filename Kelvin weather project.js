//this line assigns 293 to the variable kelvin
const kelvin = 0; 
//this line computes the value in celsius
let celsius = kelvin - 273;
//this line computes the value of fahrenheit
let fahrenheit = celsius *(9/5) + 32;
//the value of fahrenheit is rounded down and restored
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} Newtons`);