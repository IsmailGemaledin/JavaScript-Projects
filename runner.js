let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const age = 24;

if (age > 18 && earlyRegistration) {
  raceNumber += 1000;
}

if (age > 18 && earlyRegistration) {
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18 && !earlyRegistration) {
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}