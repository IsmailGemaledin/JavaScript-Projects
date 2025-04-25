//kelvin is a constant variable with the value 293
const kelvin = 294;
//celsius is kelvin - 273
const celsius = kelvin - 273;
//fahrenheit is celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
//this next line is an attempt to round down the temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33/100);
console.log(`he temperature is ${newton} Newtons.`);