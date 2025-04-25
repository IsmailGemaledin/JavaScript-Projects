//myAge is a variable that has the value of my age
let myAge = 20;
//earlyYears referrs to the fact that the first two years of a dog are like 10.5 years each
let earlyYears = 2;
earlyYears *= 10.5;
//myAge will be transformed to dog years, so we will substract the first two years, which count as 10.5 each
myAge = myAge - 2;
let laterYears = myAge;
//we return myAge to my actual age
myAge = myAge + 2;
//we should multiply laterYears with 4, since every later year for a human is 4 years for a dog
laterYears = laterYears * 4;
//a new variable will be the total age in years
let myAgeInDogYears = earlyYears + laterYears;
// Convert the name to lowercase and store it in myName
let myName = 'Ismail'.toLowerCase();
//now we print out the number of years in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);